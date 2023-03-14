import styles from "../styles/pages/thankyou.module.scss"
import CustomHead from "../components/props/customHead"
import { useState ,useEffect } from 'react';
import { useRouter } from 'next/router';


const ThankYou = () => {

    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const counter = setTimeout(() => {
        setCountdown(countdown - 1);
        }, 1000);

        if (countdown === 0) {
        clearTimeout(counter);
        }

        return () => clearTimeout(counter);
    }, [countdown]);

    useEffect(() => {
        // Redirect to the home page after 5 seconds
        const timer = setTimeout(() => {
        router.push('/');
        }, 6000);

        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    return ( 
        <>
            <CustomHead
                title="Thanks"
                description="Rola spare parts Thanks"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/thankyou"
            />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Thank you!</h1>
                    <br></br>
                    <p>We will get back to you as soon as possible.</p>
                    <br></br><br></br>
                    <p>redirecting to homepage in.. {countdown}</p>
                </main>
            </div>
        </>
     );
}
 
export default ThankYou;