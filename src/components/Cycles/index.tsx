import styles from './cycles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreaktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreaktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreaktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
