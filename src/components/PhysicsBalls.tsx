import { useEffect, useRef } from "react";
import * as THREE from "three";

// 15 dark teal shades derived from accent #6ee7b7
const SHADES = [
  0x0a1f17, 0x0b2219, 0x0d2b20, 0x0f3326,
  0x102f23, 0x112c21, 0x123d2d, 0x143626,
  0x154734, 0x163f2a, 0x16402d, 0x17513b,
  0x194930, 0x1a5b42, 0x1b5338, 0x1c6449,
  0x1e5d3f, 0x1f6e50, 0x206746, 0x236e4d,
  0x257854, 0x28825b, 0x2a8c62, 0x2d9669,
  0x2f9e70, 0x31a877, 0x33b27e, 0x35bc85,
  0x38c68c, 0x3ad093, 0x3cda9a, 0x3ee4a1,
  0x40eda8, 0x55edb3, 0x6ee7b7,
];

const RADIUS = 1;
const BOUND = 4;
const COUNT = 35;
const PULL_STRENGTH = 5;
const REPULSE_RADIUS = 6.0;
const REPULSE_STRENGTH = 250;
const DAMPING = .8;

interface BallState {
  mesh: THREE.Mesh;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
}

export default function PhysicsBalls() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // Starfield
    const starGeo = new THREE.BufferGeometry();
    const starCount = 300;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 30;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x6ee7b7,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 0, 18);

    // Lights
    const ambient = new THREE.AmbientLight(0x6ee7b7, 0.15);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xaaffdd, 1.6);
    keyLight.position.set(-5, 7, 10);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x1a4a36, 2.5, 28);
    fillLight.position.set(6, -4, 8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x6ee7b7, 0.9, 22);
    rimLight.position.set(0, -7, -5);
    scene.add(rimLight);

    // Shared geometry
    const geo = new THREE.SphereGeometry(RADIUS, 48, 48);
    const balls: BallState[] = [];

    for (let i = 0; i < COUNT; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: SHADES[i],
        roughness: 0.32,
        metalness: 0.6,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);

      const spread = 6.0;
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2
      );
      balls.push({ mesh, pos, vel });
    }

    // Mouse → world position via raycasting onto Z=0 plane
    const raycaster = new THREE.Raycaster();
    const mouse2d = new THREE.Vector2(-99, -99);
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouseWorld = new THREE.Vector3();
    let hovering = false;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse2d.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse2d.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      hovering = true;
      raycaster.setFromCamera(mouse2d, camera);
      raycaster.ray.intersectPlane(mousePlane, mouseWorld);
    };
    const onMouseLeave = () => {
      hovering = false;
    };

    mount.addEventListener("mousemove", onMouseMove);
    mount.addEventListener("mouseleave", onMouseLeave);

    const tmpForce = new THREE.Vector3();
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      balls.forEach((ball) => {
        // 1. Center-pull (cluster gravity)
        tmpForce.copy(ball.pos).negate().multiplyScalar(PULL_STRENGTH);
        ball.vel.addScaledVector(tmpForce, dt);

        // 2. Mouse repulsion
        if (hovering) {
          const dx = ball.pos.x - mouseWorld.x;
          const dy = ball.pos.y - mouseWorld.y;
          const dz = ball.pos.z - mouseWorld.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < REPULSE_RADIUS && dist > 0.01) {
            const strength =
              Math.pow((REPULSE_RADIUS - dist) / REPULSE_RADIUS, 2) *
              REPULSE_STRENGTH;
            ball.vel.x += (dx / dist) * strength * dt;
            ball.vel.y += (dy / dist) * strength * dt;
            ball.vel.z += (dz / dist) * strength * dt;
          }
        }

        // 3. Ball–ball repulsion (prevent overlap)
        balls.forEach((other) => {
          if (other === ball) return;
          const d = ball.pos.distanceTo(other.pos);
          const minDist = RADIUS * 2.2;
          if (d < minDist && d > 0.001) {
            const overlap = minDist - d;
            const strength = overlap * 18.0;
            tmpForce
              .subVectors(ball.pos, other.pos)
              .normalize()
              .multiplyScalar(strength);
            ball.vel.addScaledVector(tmpForce, dt);

            other.vel.addScaledVector(tmpForce, -dt);
          }
        });

        // 4. Damping
        ball.vel.multiplyScalar(DAMPING);

        // 5. Integrate
        ball.pos.addScaledVector(ball.vel, dt);

        // 6. Boundary clamp
        (["x", "y", "z"] as const).forEach((axis) => {
          if (ball.pos[axis] > BOUND) {
            ball.pos[axis] = BOUND;
            ball.vel[axis] *= -0.5;
          }
          if (ball.pos[axis] < -BOUND) {
            ball.pos[axis] = -BOUND;
            ball.vel[axis] *= -0.5;
          }
        });

        ball.mesh.position.copy(ball.pos);
      });

      stars.rotation.y += 0.0008;
      stars.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
