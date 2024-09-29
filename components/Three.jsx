import { Mattress } from "../models/Mattress";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/three.module.css";

function MyThree() {
  return (
    <div className={`${styles.container}`}>
      <h1>See perfection on full display.</h1>
      <p>The perfect mattress that fits all the needs in your home.</p>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <PerspectiveCamera makeDefault position={[50, 100, 100]} />
        <Environment preset="studio" />
        <OrbitControls />
        <Mattress />
        <ContactShadows />
      </Canvas>
    </div>
  );
}

export default MyThree;
