"use client";
import Image from "next/image";
import styles from "../styles/page.module.css";
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
      );
    });
  };

  return (
    <main>
      {/*Main container dividing the main page into two sections - product gallery and product infomation*/}
      <div className={styles.main}>
        <div className={styles.product}>
          {/* Product showcase container displaying the product image and features */}
          <div className={styles["product-details-container"]}>
            <div className={styles["image-container"]}>
              {/*Extremely hacky way to create a carouse. Appending it to the main image that'll create a horzontal
            scrolling carousel.*/}
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
              <span className={styles["product-showcase-hook"]}>
                {productData.hook}
              </span>
              <div className={styles["product-showcase-feature-container"]}>
                <div className={styles["product-showcase-feature"]}>
                  <span className={styles["product-showcase-feature-title"]}>
                    {productData.featureShowcase[0].name}
                  </span>
                  <span
                    className={styles["product-showcase-feature-description"]}
                  >
                    {productData.featureShowcase[0].description}
                  </span>
                </div>
                <div className={styles["product-showcase-feature"]}>
                  <span className={styles["product-showcase-feature-title"]}>
                    {productData.featureShowcase[1].name}
                  </span>
                  <span
                    className={styles["product-showcase-feature-description"]}
                  >
                    {productData.featureShowcase[1].description}
                  </span>
                </div>
              </div>
              <span className={styles["product-showcase-image"]}>
                <Image
                  src="/image1.jpg"
                  alt="Product"
                  fill={true}
                  className={styles.image}
                />
              </span>
              <span className={styles["product-showcase-image"]}>
                <Image
                  src="/image2.jpg"
                  alt="Product"
                  fill={true}
                  className={styles.image}
                />
              </span>
              <span className={styles["product-showcase-image"]}>
                <Image
                  src="/image3.jpg"
                  alt="Product"
                  fill={true}
                  className={styles.image}
                />
              </span>
              <span className={styles["product-showcase-image"]}>
                <Image
                  src="/image4.jpg"
                  alt="Product"
                  fill={true}
                  className={styles.image}
                />
              </span>
            </div>
            <div className={styles["product-showcase-image"]}>
              <Image
                src="/image5.jpg"
                alt="Product"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <ProductInformation productData={productData} />
        </div>
      </div>
      <SimpleDivider />
      <Three />
    </main>
  );
}
