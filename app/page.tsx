"use client"
import Image from "next/image";
import styles from "./page.module.css";
import SimpleDivider from "../components/SimpleDivider";
import ProductInformation from "../components/ProductInformation";
import Three from "../components/Three";
import data from "../data/Product.json";
import { useState } from "react";

export default function Home() {
  const [productData, setProductData] = useState(data.result);
 
  const renderCarousel = () => {
    return productData.imageData.map((image) => {
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
    <main>
      {/*Main container dividing the main page into two sections - product gallery and product infomation*/}
      <div className={styles.main}>
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
            />
          </div>   
        </div>
        <ProductInformation productData={productData}/>
      </div>
      </div>
      <SimpleDivider />
      <Three />
    </main>
  );
}
