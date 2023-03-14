import styles from "../styles/pages/feedback.module.scss"
import CustomHead from "../components/props/customHead"
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Feedback = () => {

    const router = useRouter();

    useEffect(() => {
        // Redirect to the home page after 5 seconds
        const timer = setTimeout(() => {
        router.push('/');
        }, 3000);

        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    return ( 
        <>
            <CustomHead
                title="Feedback"
                description="Rola spare parts Feedback Sent"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/feedback"
            />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Thank you!</h1>
                    <br></br>
                    <p>We will get back to you as soon as possible.</p>
                    <br></br><br></br>
                    <p>redirecting to homepage...</p>
                </main>
            </div>
        </>
     );
}
 
export default Feedback;