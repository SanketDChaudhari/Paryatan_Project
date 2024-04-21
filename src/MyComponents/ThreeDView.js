import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDView = () => {
  const divRef = useRef();
  const isVisible = useRef(true);
  const modelLoaded = useRef(false);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const controls = new OrbitControls(camera, renderer.domElement);
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    if (!modelLoaded.current && isVisible.current) {
      // Set up camera
      camera.position.z = 6;

      // Set up renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      divRef.current.appendChild(renderer.domElement);

      // Set up controls
      controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      // controls.maxPolarAngle = Math.PI / 2;
      
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.5/");

      // const model = "https://raw.githubusercontent.com/shraddhamulay09/3DModels/main/lotus_temple.glb";
      // const model = "https://raw.githubusercontent.com/shraddhamulay09/3DModels/main/TajM.glb";
      const model = "https://raw.githubusercontent.com/shraddhamulay09/3DModels/main/gatewayofindia.glb"

      const loader = new GLTFLoader();
      loader.setDRACOLoader(dracoLoader);
      loader.load(
        model,
        (gltf) => {
          // Calculate the bounding box of the model
          const boundingBox = new THREE.Box3().setFromObject(gltf.scene);

          // Calculate the maximum dimension of the bounding box
          const maxDimension = Math.max(
            boundingBox.max.x - boundingBox.min.x,
            boundingBox.max.y - boundingBox.min.y,
            boundingBox.max.z - boundingBox.min.z
          );

          // Set a target size for your models (adjust as needed)
          const targetSize = 8.0;

          // Calculate the scale factor to achieve the target size
          const scaleFactor = targetSize / maxDimension;

          gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
          gltf.scene.position.set(0, 0, 0);

          scene.add(gltf.scene);

          // Debugging: Log material and color information
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;

              child.material.side = THREE.DoubleSide;

              console.log('Mesh Material:', child.material);
              console.log('Mesh Colors:', child.geometry.attributes.color.array);
            }
          });         

        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          console.error('Error loading GLTF file:', error);
        }
      );
      window.addEventListener('resize', handleResize);
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;  // Enable shadow casting
      scene.add(directionalLight);

      const updateLightPosition = () => {
        directionalLight.position.copy(camera.position);
      };
      
      window.addEventListener('resize', handleResize);
    
      // renderer.setClearColor(0x000000);
      // renderer.setClearColor(0xffd700);
      renderer.setClearColor(0x7a7a7a);
      // renderer.setClearColor(0x4b0082);

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        updateLightPosition();
        renderer.render(scene, camera);
      };

      animate();

      modelLoaded.current = true;
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scene) {
        scene.traverse((object) => {
          if (object.isMesh) {
            object.material.dispose();
            object.geometry.dispose();
          }
        });

        while (scene.children.length > 0) {
          const child = scene.children[0];
          scene.remove(child);
        }
      }

      if (renderer) {
        renderer.dispose();
      }

      isVisible.current = false;
    };
  }, []);

  return isVisible.current ? <div ref={divRef} ></div> : null;
};

export default ThreeDView;
