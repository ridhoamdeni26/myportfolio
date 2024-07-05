import React, { useEffect } from 'react';
import * as THREE from 'three';

function AnimateService() {
    useEffect(() => {
        let scene, camera, renderer;
        let snowflakes = [];

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 100;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('service-background').appendChild(renderer.domElement);

            renderer.setClearColor(0xffffff);

            const snowflakeCount = 500;
            const snowflakeGeometry = new THREE.CircleGeometry(1, 6);
            const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
                snowflake.position.x = Math.random() * window.innerWidth - window.innerWidth / 2;
                snowflake.position.y = Math.random() * window.innerHeight - window.innerHeight / 2;
                snowflake.position.z = Math.random() * 200 - 100;
                snowflakes.push(snowflake);
                scene.add(snowflake);
            }

            animate();
        }

        const animate = () => {
            requestAnimationFrame(animate);

            snowflakes.forEach((snowflake) => {
                snowflake.position.y -= 0.5;

                if (snowflake.position.y < -window.innerHeight / 2) {
                    snowflake.position.y = window.innerHeight / 2;
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
        <div id="service-background" style={{ position: 'absolute', zIndex: -1 }} />
    )
}

export default AnimateService