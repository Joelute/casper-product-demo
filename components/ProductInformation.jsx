import styles from "../styles/product_infomation.module.css";
import Dropdown from "../components/Dropdown";


// Main component that renders the product infomation section

// This function is be split even further between the product price and product specifics
// for mobile friendly web. The current HTML is wrong and does not allow us to split the 
// two apart to sandwich the picture carousel.
export default function SimpleDivider({productData}) {
  return (
    <div className={styles.details}>
        <h1 className={styles.name}>{productData.productName}</h1>
        <p className={styles.price}>${productData.price}</p>
    

        <div className={styles.details}>
            <Dropdown sizes={productData.size}/>
            <button className={styles.button}>Add to Cart</button>
            <p>{productData.description}</p>
            <ul className={styles["product-details-list"]}>
                <li>Casper Signature Foam with AirScape® Technology increases airflow and soothes you to sleep.</li>
                <li>AirScape Technology channels away heat and humidity.</li>
                <li>Premium memory foam conforms to your body to absorb pressure.
                ProSupport Foam prevents sinking and sagging.</li>
            </ul>
        </div>
    </div>
  );
}
