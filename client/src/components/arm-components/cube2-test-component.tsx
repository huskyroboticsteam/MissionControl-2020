import React, { useRef, useState } from 'react'
// import { useFrame } from 'react-three-fiber'
// import { useDrag } from "react-use-gesture"

// consolidate into canvas only?
function BoxJoint1(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()


  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  //useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[0.5, 3, 0.5]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'purple'} />
    </mesh>
  )
}

export default BoxJoint1;