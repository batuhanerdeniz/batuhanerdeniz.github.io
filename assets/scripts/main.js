import * as THREE from 'three';
        import { FontLoader } from './FontLoader.js';
        import { TextGeometry } from './TextGeometry.js';
        import { OrbitControls } from './OrbitControls.js';

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('threejs-container').appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.0001;
        controls.screenSpacePanning = false;
        controls.zoomSpeed = 0.1;
        camera.position.z = 260;
        controls.minDistance = 100; // Minimum zoom distance
        controls.maxDistance = 500; // Maximum zoom distance
        controls.minPolarAngle = Math.PI / 4; // Minimum tilt angle (in radians)
        controls.maxPolarAngle = Math.PI / 2; // Maximum tilt angle (in radians)

        let font;
        let texts = []; 
        let imageMesh;
        let hoverState = false;

        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (loadedFont) {
            font = loadedFont;
            const windowWidth = window.innerWidth;
            const desktopXPositions = [-1.5, -3.8, -4.5, -10, -10, -10, -10]
            const mobileXPositions = [-0.8, -1.9, -2.2, -1.1, -1.1, -1.1, -2.5]
            const desktopImagePositions = [15,15 , 10, 0, 235]
            const mobileImagePositions = [4,4 , 0, 8, 235]

            const initialXPositions = windowWidth < 768 ? mobileXPositions : desktopXPositions;
            const initialImagePositions = windowWidth < 768 ? mobileImagePositions : desktopImagePositions;
            addText('Hi, I am', 0xffffff,initialXPositions[0], 250, 3, 253, 500);
            addText('Batuhan Erdeniz', 0xffcc00,initialXPositions[1], 253, 0, 253, 500);
            addText('Frontend Developer', 0xffffff,initialXPositions[2], 250, -3, 253, 500);
            addText('My Skills', 0xffcc00,initialXPositions[3], 240,  3, 220, 253);
            addText('Three JS', 0xffffff,initialXPositions[4], 240,  0, 220, 253);
            addText('React JS', 0xffffff,initialXPositions[5], 240,  -1, 220, 253);
            addText('Reach me on Linkedin', 0xffffff,initialXPositions[6], 240,  -5, 220, 253, true, 'https://www.linkedin.com/in/batuhan-erdeniz/');
            

            const textureLoader = new THREE.TextureLoader();
            const imageMaterial = new THREE.MeshBasicMaterial({
                map: textureLoader.load('./assets/img/batuhan-erdeniz-profile-picture.jpg'), 
                transparent: true,
            });
            const imageGeometry = new THREE.PlaneGeometry(initialImagePositions[0], initialImagePositions[1]);
            imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
            scene.add(imageMesh);
            imageMesh.position.set(initialImagePositions[2], initialImagePositions[3], 235);
        });

        

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onMouseClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children);

            for (let i = 0; i < intersects.length; i++) {
                const intersectedObject = intersects[i].object;
                if (intersectedObject.userData.isClickable) {
                    window.location.href = intersectedObject.userData.link;
                    break; 
                }
            }
        }

        function onMouseMove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);

            let isHovering = false;
            for (let i = 0; i < intersects.length; i++) {
                if (intersects[i].object.userData.isClickable) {
                    isHovering = true;
                    break;
                }
            }

            hoverState = isHovering;
            document.body.style.cursor = isHovering ? 'pointer' : ''; 
        }

        window.addEventListener('mousemove', onMouseMove, false); 


        window.addEventListener('click', onMouseClick, false);

        function addText(text, color, xPosition, zPosition, yPosition, showPositionZ, hidePositionZ, isClickable = false, link = '') {
            const fontSize = window.innerWidth < 768 ? 0.4 : 0.8;
            
            const textGeometry = new TextGeometry(text, {
                font: font,
                size: fontSize,
                height: 0.2,
                curveSegments: 5,
            });
            const textMaterial = new THREE.MeshBasicMaterial({ color: color });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textGeometry.computeBoundingBox();
            textGeometry.boundingBox.getCenter(textMesh.position).multiplyScalar(-1);
            textMesh.position.x = xPosition;
            textMesh.position.z = zPosition;
            textMesh.position.y = yPosition;
            scene.add(textMesh);
            texts.push({ mesh: textMesh, showZ: showPositionZ, hideZ: hidePositionZ, isClickable, link });


            if (isClickable) {
                textMesh.userData = { isClickable, link };
            }
        }



        const objectPoolSize = 250;
        const flyingObjects = [];

        function createObjectPool() {
            for (let i = 0; i < objectPoolSize; i++) {
                const geometry = new THREE.SphereGeometry(2, 8, 8); 
                const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set((Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500);
                scene.add(mesh);
                flyingObjects.push(mesh);
            }
        }

        function updateFlyingObjects() {
            flyingObjects.forEach(mesh => {
                mesh.position.z += 1; 
                if (mesh.position.z > 300) { 
                    mesh.position.set((Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, -300);
                }
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            // Manually limit the camera's position to ensure it stays within a desired area
            camera.position.clamp(new THREE.Vector3(-2, -2, 2), new THREE.Vector3(2, 2, 500));

            camera.position.z = Math.max(250, Math.min(camera.position.z, 280));
            texts.forEach(({ mesh, showZ, hideZ }) => {
                mesh.visible = camera.position.z >= showZ && camera.position.z <= hideZ;
            });

            texts.forEach(({ mesh, isClickable }) => {
                if (isClickable && hoverState) {
                    mesh.material.color.set(0xffcc00); 
                } else if (isClickable) {
                    mesh.material.color.set(0xffffff); 
                }
            });
            if (imageMesh) {
                imageMesh.visible = camera.position.z >= 220 && camera.position.z <= 253; 
            }
            updateFlyingObjects();
            renderer.render(scene, camera);
        }
        createObjectPool();
        animate();