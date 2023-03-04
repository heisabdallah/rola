import MainContent from "@/components/MainContent"
import styles from "../styles/index.module.scss"
import CustomHead from "../components/props/customHead"
import Header from "../components/Header"
import Link from "next/link"
import Image from "next/image"
import rola1 from "public/images/rola1.jpg"
import rola2 from "public/images/rola2.jpg"
import rola3 from "public/images/rola3.jpg"
import rola4 from "public/images/rola4.jpg"
import rola5 from "public/images/rola5.jpg"
import rola6 from "public/images/rola6.jpg"
import { useState } from "react"

export default function Home(){
    
        

    return (
        <>
            <CustomHead
                title="Home"
                description="Rola spare parts awesome landing page"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/home/"
            />
            <div className={styles.container}>
                    <Header />

                    <main className={styles.main}>
                        <section>
                            <div className={styles.hero_section}>
                                <h1>Affordable meets excellence</h1>
                                 <button className={styles.hero_cta}><Link href="/products">Browse Our Products</Link></button>
                            </div>
                        </section>
                        <Link href="#content" scroll={false} >Main Content</Link>
                        <section className={styles.aboutSection}>
                            <div className={styles.about}>
                                <h1>Who are we?</h1>
                                <p>We primarily deal with selling a variety of genuinely New and Used CAR SPARE PARTS from brands such as Mazda, Ford and more. We have over 10 years of business experience.
                                    We have worked with satisfied customers from Tanzania, Kenya, Malawi, Congo and more providing our customers the assistance to buying and repairing as our secondary service.
                                    We are located at Shauri Moyo Road, Ilala, Dar Es Salaam, Tanzania.
                                    ROLA SPARE PARTS "We prioritize your needs"</p>
                            </div>
                        </section>
                        <section className={styles.imageGrid}>
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

                        </section>
                        
                    </main>

                    {/* <aside className={styles.aside}>
                            <MainContent />
                    </aside> */}

                    <footer className={styles.footer}>
                        <div className={styles.contact_section} id="content">
                            <h1 className={styles.cont_title}>CONTACT</h1>
                            <div className={styles.form}>
                                <h1>Reach To Us</h1>
                                <form action="/feedback">
                                    {/* <label for="flname">Full name</label> */}
                                    <input type="text" id="flname" name="flname" placeholder="Name" />
                                    {/* <label for="email">Email</label> */}
                                    <input type="email" id="email" name="email" placeholder="Email" />
                                    {/* <label for="message">Message</label> */}
                                    <input type="text" id="message" name="message" placeholder="Message" className={styles.text_field} />
                                    <button type="submit" className={styles.submit_btn}>Submit</button>
                                </form>
                            </div>
                        </div>
                        
                        <MainContent />
                    </footer>
                </div>
        </>
    )
}
