import Header from "../Header/Header";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Header />
      <Space />
    </div>
  );
}

function Space() {
  return (
    <section className={styles.space_sec}>
      <div className={styles.space}>
        <h4>So, you want to travel to</h4>
        <h2>space</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.space_shape}>
        <p className={styles.space_explore}>Explore</p>
      </div>
    </section>
  );
}
