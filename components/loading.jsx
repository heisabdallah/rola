import styles from "styles/components/loading.module.scss"

const Loading = () => {
    return ( 
        <div className={styles.middle}>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
            <div className={`${styles.bar} ${styles.bar4}`}></div>
            <div className={`${styles.bar} ${styles.bar5}`}></div>
            <div className={`${styles.bar} ${styles.bar6}`}></div>
            <div className={`${styles.bar} ${styles.bar7}`}></div>
            <div className={`${styles.bar} ${styles.bar8}`}></div>
        </div>
     );
}
 
export default Loading;
