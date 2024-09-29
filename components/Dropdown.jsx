import styles from "../styles/dropdown.module.css";

export default function Dropdown({sizes}) {
    return (
        <div className={styles["size-container"]}>
            <label className={styles["size-title"]}>Select your size
            </label>
            <select className={styles["size-selector"]}>
                <option disabled>Select Size</option>
                {sizes.map((size) => <option>{size}</option>)}
            </select>
        </div>
  );
}