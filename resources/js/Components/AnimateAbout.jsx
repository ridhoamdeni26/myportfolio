import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function AnimateAbout() {
    const [isAnimating, setIsAnimating] = useState(true);
    useEffect(() => {
        let scene, camera, renderer;
        let particles = [];

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 100;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('biography-container').appendChild(renderer.domElement);

            renderer.setClearColor(0xffffff);

            const particleCount = 500;
            const particleMaterial = new THREE.PointsMaterial({
                color: 0x000000,
                size: 1,
            });

            const particleGeometry = new THREE.BufferGeometry();
            const positions = [];

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * window.innerWidth - window.innerWidth / 2;
                const y = Math.random() * window.innerHeight - window.innerHeight / 2;
                const z = Math.random() * 200 - 100;

                positions.push(x, y, z);
            }

            particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

            const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particleSystem);

            animate();
        }

        const animate = () => {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            // Move particles upwards
            scene.children[0].geometry.attributes.position.array.forEach((_, index) => {
                if (index % 3 === 1) {
                    scene.children[0].geometry.attributes.position.array[index] += 0.5; // Adjust speed here
                }
            });
            scene.children[0].geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        init();

        return () => {
            window.removeEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
            setIsAnimating(false);
        };
    }, [isAnimating]);
    return (
        <div id="biography-container" style={{ position: 'absolute', zIndex: -1 }} />
    )
}

export default AnimateAbout