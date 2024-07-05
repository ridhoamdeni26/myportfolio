import React, { useEffect } from 'react';
import * as THREE from 'three';

export default function AnimateHome() {
    useEffect(() => {
        let scene, camera, renderer;
        let particles = [];

        const init = () => {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 100;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('container').appendChild(renderer.domElement);

            renderer.setClearColor(0xffffff);

            let particleCount = 1000;
            let particleMaterial = new THREE.PointsMaterial({
                color: 0x000000,
                size: 1,
            });

            let particleGeometry = new THREE.BufferGeometry();
            let positions = [];
            let colors = [];

            for (let i = 0; i < particleCount; i++) {
                let x = Math.random() * 200 - 100;
                let y = Math.random() * 200 - 100;
                let z = Math.random() * 200 - 100;

                positions.push(x, y, z);

                let r = Math.random();
                let g = Math.random();
                let b = Math.random();
                let color = new THREE.Color(r, g, b);
                colors.push(color.r, color.g, color.b);
            }

            particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            let particleSystem = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particleSystem);

            animate();
        }

        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate particles
            let time = Date.now() * 0.00005;
            scene.children[0].rotation.y = time * 0.2;

            // Move particles
            let positions = scene.children[0].geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += Math.sin(time + i * 0.01) * 0.1;
                positions[i + 1] += Math.cos(time + i * 0.01) * 0.1;
                positions[i + 2] += Math.sin(time + i * 0.01) * 0.1;
            }
            scene.children[0].geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        init();
    }, []);

    return <div id="container" className="bg-[#FFFFFF]"></div>;
}
