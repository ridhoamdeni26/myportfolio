import React, { useEffect } from 'react';
import * as THREE from 'three';

function AnimatePortfolio() {
    useEffect(() => {
        let scene, camera, renderer;
        let glassPieces = [];

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 100;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('shattered-glass-container').appendChild(renderer.domElement);

            renderer.setClearColor(0xffffff);

            const glassPieceCount = 50;
            const glassPieceGeometry = new THREE.PlaneGeometry(5, 5);
            const glassPieceMaterial = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.5,
                roughness: 0.1,
                metalness: 0.5,
                side: THREE.DoubleSide
            });

            for (let i = 0; i < glassPieceCount; i++) {
                const glassPiece = new THREE.Mesh(glassPieceGeometry, glassPieceMaterial);
                glassPiece.position.x = Math.random() * 200 - 100;
                glassPiece.position.y = Math.random() * 200 - 100;
                glassPiece.position.z = Math.random() * 200 - 100;
                glassPiece.rotation.x = Math.random() * 2 * Math.PI;
                glassPiece.rotation.y = Math.random() * 2 * Math.PI;
                glassPiece.rotation.z = Math.random() * 2 * Math.PI;
                glassPieces.push(glassPiece);
                scene.add(glassPiece);
            }

            animate();
        }

        const animate = () => {
            requestAnimationFrame(animate);

            glassPieces.forEach((glassPiece) => {
                glassPiece.position.z += 0.5;

                // Reset posisi jika melewati layar
                if (glassPiece.position.z > 100) {
                    glassPiece.position.z = -100;
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
        <div id="shattered-glass-container" style={{ position: 'absolute', zIndex: -1 }} />
    )
}

export default AnimatePortfolio