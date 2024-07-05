import React, { useEffect } from 'react';
import * as THREE from 'three';

function AnimateContact() {
    useEffect(() => {
        let scene, camera, renderer;
        let clouds = [];

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 100;

            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('cloud-container').appendChild(renderer.domElement);

            const cloudCount = 10;
            const cloudTexture = new THREE.TextureLoader().load('assets/img/cloud/cloud.png');
            const cloudMaterial = new THREE.PointsMaterial({
                size: 10,
                map: cloudTexture,
                transparent: true
            });

            for (let i = 0; i < cloudCount; i++) {
                const cloudGeometry = new THREE.BufferGeometry();
                const cloudVertices = [];

                for (let j = 0; j < 1000; j++) {
                    const x = Math.random() * 2000 - 1000;
                    const y = Math.random() * 1000 - 200;
                    const z = Math.random() * 2000 - 1000;

                    cloudVertices.push(x, y, z);
                }

                cloudGeometry.setAttribute('position', new THREE.Float32BufferAttribute(cloudVertices, 3));
                const cloud = new THREE.Points(cloudGeometry, cloudMaterial);
                cloud.position.set(Math.random() * 2000 - 1000, Math.random() * 500 - 100, Math.random() * 2000 - 1000);
                clouds.push(cloud);
                scene.add(cloud);
            }

            animate();
        }

        const animate = () => {
            requestAnimationFrame(animate);

            clouds.forEach((cloud) => {
                cloud.position.x += 0.1; // Bergerak ke kanan
                if (cloud.position.x > 1000) {
                    cloud.position.x = -1000; // Reset posisi jika melewati layar
                }
            });

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
        };
    }, []);

    return (
        <div id="cloud-container" style={{ position: 'absolute', zIndex: -1 }} />
    )
}

export default AnimateContact