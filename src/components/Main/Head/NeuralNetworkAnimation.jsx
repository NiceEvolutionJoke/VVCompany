import React, { useRef, useState } from 'react';
import { extend, Canvas, useFrame, useThree } from 'react-three-fiber';
import { Canvas as ThreeCanvas } from 'three';
import CanvasJS from 'canvasjs';
extend({ Canvas: ThreeCanvas });

function NeuralNetworkAnimation() {
    const point1 = useRef();
    const point2 = useRef();
    const point3 = useRef();
    const [hovered, setHovered] = useState(false);
    const animate = (delta) => {
        if (point1.current && point2.current && point3.current) {
            if (hovered) {
                point1.current.position.x += Math.random() * 0.1 - 0.05;
                point1.current.position.y += Math.random() * 0.1 - 0.05;
                point2.current.position.x += Math.random() * 0.1 - 0.05;
                point2.current.position.y += Math.random() * 0.1 - 0.05;
                point3.current.position.x += Math.random() * 0.1 - 0.05;
                point3.current.position.y += Math.random() * 0.1 - 0.05;
            }
        }
    };
    useFrame(animate);
    return (
        <Canvas
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ height: '200px', width: '200px' }}
        >
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <mesh ref={point1} position={[0, 0, 0]}>
                    <sphereBufferGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color={'#FF0000'} />
                </mesh>
                <mesh ref={point2} position={[1, 1, 0]}>
                    <sphereBufferGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color={'#00FF00'} />
                </mesh>
                <mesh ref={point3} position={[-1, 1, 0]}>
                    <sphereBufferGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color={'#0000FF'} />
                </mesh>
                <line>
                    <geometry
                        vertices={[
                            point1.current ? point1.current.position : null,
                            point2.current ? point2.current.position : null,
                            point3.current ? point3.current.position : null,
                        ]}
                        onUpdate={(self) => self.verticesNeedUpdate = true}
                    />
                    <lineBasicMaterial color={'#FFFFFF'} linewidth={2} />
                </line>
            </mesh>
        </Canvas>
    );
}

export default NeuralNetworkAnimation;