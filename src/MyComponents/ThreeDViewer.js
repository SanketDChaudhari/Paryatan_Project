import React from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const ThreeDViewer = () => {

    const canvas = document.querySelector('.webgl')
    const scene = new THREE.Scene()

    // const model = "https://raw.githubusercontent.com/shraddhamulay09/3DModels/main/lotus_temple.glb";
    // const model = "https://raw.githubusercontent.com/shraddhamulay09/3DModels/main/TajM.glb";
    const model = "https://raw.githubusercontent.com/shraddhamulay09/3DModels/main/gatewayofindia.glb"

    const loader = new GLTFLoader()
    loader.load(model, function(glb){
        console.log(glb)
    },function(xhr){
        console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    },function(error){
        console.log("An error occured")
    })


    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(2,2,5)
    scene.add(light)

    // const geometry = new THREE.BoxGeometry(1, 1,1)
    // const material = new THREE.MeshBasicMaterial({
    //     color: 'red'
    // })

    // const boxmesh = new THREE.Mesh(geometry, material)
    // scene.add(boxmesh)

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
    camera.position.set(0, 1, 2)
    scene.add(camera)

    const renderer  = new THREE.WebGL1Renderer({
        canvas: canvas
    })

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.gammaOutput = true
    


    function animate(){
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }

    animate()

  return (
    <div>
      <canvas className='webgl'></canvas>
    </div>
  )
}

export default ThreeDViewer
