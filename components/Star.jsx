import styles from "../styles/star.module.css";

export default function Star({ review }) {
  const renderStarRow = () => {
    let starRow = [];
    for (let i = 0; i < review; i++) {
      starRow.push(<i class="fa-solid fa-star"></i>);
    }
    return starRow;
  };

  return (
    <div className={styles.container}>
      {renderStarRow()}
      <p>{review}</p>
    </div>
  );
}
