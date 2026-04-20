"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function Logo3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Se o script já foi carregado por uma navegação anterior
  useEffect(() => {
    if ((window as any).THREE) setScriptLoaded(true);
  }, []);

  useEffect(() => {
    if (!scriptLoaded) return;
    const mount = mountRef.current;
    if (!mount) return;

    const THREE = (window as any).THREE;
    let animId = 0;
    let mounted = true;

    const W = mount.clientWidth || 160;
    const H = mount.clientHeight || 40;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.01, 100);
    camera.position.set(0, 0, 1.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    mount.appendChild(renderer.domElement);

    // Iluminação
    scene.add(new THREE.AmbientLight(0x1a1005, 1.2));

    const keyLight = new THREE.DirectionalLight(0xffd060, 3.5);
    keyLight.position.set(3, 3, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x3050ff, 0.5);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffcc44, 1.8);
    rimLight.position.set(0, 5, -2);
    scene.add(rimLight);

    const orbitLight = new THREE.PointLight(0xffeebb, 2.5, 8);
    orbitLight.position.set(2, 1, 3);
    scene.add(orbitLight);

    const group = new THREE.Group();
    scene.add(group);

    new THREE.TextureLoader().load("/images/no_background.png", (texture: any) => {
      if (!mounted) return;
      texture.encoding = THREE.sRGBEncoding;
      const aspect = texture.image.width / texture.image.height;
      const pw = 3.5, ph = pw / aspect;
      const boxGeo = new THREE.BoxGeometry(pw, ph, 0.12);

      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xb8860b, metalness: 1.0, roughness: 0.25,
      });
      const frontMat = new THREE.MeshStandardMaterial({
        map: texture, transparent: true, metalness: 0.5, roughness: 0.3,
      });
      const backMat = new THREE.MeshStandardMaterial({
        map: texture, transparent: true, metalness: 0.6, roughness: 0.4, opacity: 0.6,
      });

      group.add(new THREE.Mesh(boxGeo, [goldMat, goldMat, goldMat, goldMat, frontMat, backMat]));
      group.add(new THREE.LineSegments(
        new THREE.EdgesGeometry(boxGeo),
        new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.65 })
      ));
    });

    const clock = new THREE.Clock();
    let angle = 0;

    function animate() {
      if (!mounted) return;
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      angle += 0.004;
      group.rotation.y = angle;
      group.rotation.x = Math.sin(t * 0.3) * 0.18;
      group.position.y = Math.sin(t * 0.7) * 0.04;
      orbitLight.position.x = Math.sin(t * 0.8) * 3;
      orbitLight.position.z = Math.cos(t * 0.8) * 3 + 1;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      mounted = false;
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [scriptLoaded]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div ref={mountRef} style={{ width: 160, height: 40 }} aria-label="Exclusive Dreams logo 3D" />
    </>
  );
}
