import styles from "styles/components/contactForm.module.scss"

const ContactForm = () => {

    const feedbackAPI = "api/feedback"

    return ( 
        <div className={styles.contact_section} >
            <div className={styles.form}>
                <h1>Reach To Us</h1>
                <form action={feedbackAPI} method="POST">
                    {/* <label for="flname">Full name</label> */}
                    <input type="text" id="name" name="name" placeholder="Name" />
                    {/* <label for="email">Email</label> */}
                    <input type="email" id="email" name="email" placeholder="Email" />
                    {/* <label for="message">Message</label> */}
                    <input type="text" id="message" name="message" placeholder="Message" className={styles.text_field} />
                    <button type="submit" className={styles.submit_btn}>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactForm;