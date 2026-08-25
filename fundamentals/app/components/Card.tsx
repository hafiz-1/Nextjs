import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>My First CSS Module</h2>
    </div>
  );
}