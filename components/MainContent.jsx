import styles from "../styles/MainContent.module.scss";


export default function MainContent(){
    return(
        <div className={styles.container}>
            <section className={styles.article}>
                <h1>
                    Who are we?
                </h1>
                <p className={styles.para}>
                We primarily deal with selling a variety of genuinely New and Used CAR SPARE PARTS from brands such as Mazda, Ford and more. We have over 10 years of business experience.
                We have worked with satisfied customers from Tanzania, Kenya, Malawi, Congo and more providing our customers the assistance to buying and repairing as our secondary service.
                We are located at Shauri Moyo Road, Ilala, Dar Es Salaam, Tanzania.
                ROLA SPARE PARTS "We prioritize your needs"
                </p>
            </section>

        </div>
    )
}