import styles from "./Heading.module.css";

export default function Heading({ number, title }) {
  return (
    <div className={styles.heading_con}>
      <h4 className={styles.heading}>
        <span className={styles.heading_span}>{`0${number}`}</span>
        {title}
      </h4>
    </div>
  );
}
