import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const imageData = [
    {
      src: "/image1.jpg",
      alt: "Product",
    },
    {
      src: "/image2.jpg",
      alt: "Product",
    },
    {
      src: "/image3.jpg",
      alt: "Product",
    },
    {
      src: "/image4.jpg",
      alt: "Product",
    },
    {
      src: "/image5.jpg",
      alt: "Product",
    },
  ]

  const renderCarousel = () => {
    return imageData.map((image) => {
      return (
          <Image
            src={image.src}
            alt={image.alt}
            width={1023}
            height={1023}
            sizes="100vw"
            className={`${styles.image} ${styles["carousel-image"]}`}
          />
      )
    })
  }

  return (
    <main className={styles.main}>
      {/*Main container dividing the main page into two sections - product showcase and details*/}
      <div className={styles.product}>
        {/* Product showcase container displaying the product image and features */}
        <div className={styles["product-details-container"]}>
          <div className={styles["image-container"]}>
            <Image
              src="/product.jpg"
              alt="Product"
              fill={true}
              sizes="(max-width: 1024px) 163vw, 60vw"
              className={styles.image}
            />
            {renderCarousel()}
          </div>
          {/* Product showcase container displaying the product features */}
          <div className={styles["product-showcase"]}>
            <span className={styles["product-showcase-hook"]}>Inspired by the mattress that started it all</span>
            <div className={styles["product-showcase-feature-container"]}>
              <div className={styles["product-showcase-feature"]}>
                <span className={styles["product-showcase-feature-title"]}>Casper</span>
                <span className={styles["product-showcase-feature-description"]}>Our uniquely responsive layer of foam is designed to soothe you to sleep with the perfect bit of bounce.</span>
              </div>
              <div className={styles["product-showcase-feature"]}>
                <span className={styles["product-showcase-feature-title"]}>AirScape</span>
                <span className={styles["product-showcase-feature-description"]}>Thousands of perforations in a breathable foam help keep you comfortably cool all night.</span>
              </div>
            </div>
            <span className={styles["product-showcase-image"]}><Image
              src="/image1.jpg"
              alt="Product"
              fill={true}
              className={styles.image}
            /></span>
            <span className={styles["product-showcase-image"]}><Image
              src="/image2.jpg"
              alt="Product"
              fill={true}
              className={styles.image}
            /></span>
            <span className={styles["product-showcase-image"]}><Image
              src="/image3.jpg"
              alt="Product"
              fill={true}
              className={styles.image}
            /></span>
            <span className={styles["product-showcase-image"]}><Image
              src="/image4.jpg"
              alt="Product"
              fill={true}
              className={styles.image}
            /></span>
               
          </div>
          <div className={styles["product-showcase-image"]}><Image
              src="/image5.jpg"
              alt="Product"
              fill={true}
              className={styles.image}
            /></div>   
        </div>
        <div className={styles.details}>
          <h1 className={styles.name}>The Casper Mattress</h1>
          <p className={styles.price}>$1199</p>

        <div className={styles.details}>
          <div className={styles["size-container"]}>
            <label className={styles["size-title"]}>Select your size
            </label>
            <select className={styles["size-selector"]}>
              <option disabled>Select Size</option>
              <option>Twin</option>
              <option>Full</option>
              <option>Queen</option>
              <option>King</option>
            </select>
          </div>
            <button className={styles.button}>Add to Cart</button>
            <p className={styles["product-details-description"]}>The first premium foam mattress-in-a-box, The Casper works its magic and delivers unbeatable comfort night after night.
            </p>
            <ul className={styles["product-details-list"]}>
              <li className={styles["product-details-item"]}>Casper Signature Foam with AirScape® Technology increases airflow and soothes you to sleep.</li>
              <li className={styles["product-details-item"]}>AirScape Technology channels away heat and humidity.</li>
              <li className={styles["product-details-item"]}>Premium memory foam conforms to your body to absorb pressure.
              ProSupport Foam prevents sinking and sagging.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
