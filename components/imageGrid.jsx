import styles from "styles/components/imageGrid.module.scss"
import Image from "next/image"
import rola1 from "public/images/rola1.jpg"
import rola2 from "public/images/rola2.jpg"
import rola3 from "public/images/rola3.jpg"
import rola4 from "public/images/rola4.jpg"
import rola5 from "public/images/rola5.jpg"
import rola6 from "public/images/rola6.jpg"

const ImageGrid = () => {
    return ( 
        <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={rola6} />
                    <div className={styles.heading}>
                        <h1>ROLA</h1>
                        <div className={styles.info}>
                            <p>Laborum in quis deserunt laborum irure. Minim veniam commodo tempor Lorem amet nulla. Eiusmod cupidatat exercitation aliqua id duis in. Laborum ipsum quis excepteur do reprehenderit amet pariatur qui dolor veniam laboris labore aliqua cupidatat. Deserunt culpa aliquip consectetur reprehenderit culpa.</p>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={rola5} />
                    <div className={styles.heading}>
                        <h1>ROLA</h1>
                        <div className={styles.info}>
                            <p>Laborum in quis deserunt laborum irure. Minim veniam commodo tempor Lorem amet nulla. Eiusmod cupidatat exercitation aliqua id duis in. Laborum ipsum quis excepteur do reprehenderit amet pariatur qui dolor veniam laboris labore aliqua cupidatat. Deserunt culpa aliquip consectetur reprehenderit culpa.</p>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={rola4} />
                    <div className={styles.heading}>
                        <h1>ROLA</h1>
                        <div className={styles.info}>
                            <p>Laborum in quis deserunt laborum irure. Minim veniam commodo tempor Lorem amet nulla. Eiusmod cupidatat exercitation aliqua id duis in. Laborum ipsum quis excepteur do reprehenderit amet pariatur qui dolor veniam laboris labore aliqua cupidatat. Deserunt culpa aliquip consectetur reprehenderit culpa.</p>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={rola3} />
                    <div className={styles.heading}>
                        <h1>ROLA</h1>
                        <div className={styles.info}>
                            <p>Laborum in quis deserunt laborum irure. Minim veniam commodo tempor Lorem amet nulla. Eiusmod cupidatat exercitation aliqua id duis in. Laborum ipsum quis excepteur do reprehenderit amet pariatur qui dolor veniam laboris labore aliqua cupidatat. Deserunt culpa aliquip consectetur reprehenderit culpa.</p>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={rola2} />
                    <div className={styles.heading}>
                        <h1>ROLA</h1>
                        <div className={styles.info}>
                            <p>Laborum in quis deserunt laborum irure. Minim veniam commodo tempor Lorem amet nulla. Eiusmod cupidatat exercitation aliqua id duis in. Laborum ipsum quis excepteur do reprehenderit amet pariatur qui dolor veniam laboris labore aliqua cupidatat. Deserunt culpa aliquip consectetur reprehenderit culpa.</p>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={rola1} />
                    <div className={styles.heading}>
                        <h1>ROLA</h1>
                        <div className={styles.info}>
                            <p>Laborum in quis deserunt laborum irure. Minim veniam commodo tempor Lorem amet nulla. Eiusmod cupidatat exercitation aliqua id duis in. Laborum ipsum quis excepteur do reprehenderit amet pariatur qui dolor veniam laboris labore aliqua cupidatat. Deserunt culpa aliquip consectetur reprehenderit culpa.</p>
                        </div>
                    </div> 
                </div> 
            </div>

        </div>
     );
}
 
export default ImageGrid;