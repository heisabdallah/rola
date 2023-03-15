import styles from "../styles/pages/feedbacks.module.scss"
import { useState, useEffect } from "react";
import Loading from "components/loading"
import CustomHead from "@/components/props/customHead";

function Feedbacks() {

    const feedbackAPI = "api/feedback"
    const [feedbacks, setFeedbacks] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const response = await fetch(feedbackAPI)
            const data = await response.json()

            setFeedbacks(data)
            setLoading(false);
            
        }
        fetchFeedbacks()
    }, [])


    return (
        <>
            <CustomHead
                title="Feedbacks"
                description="Rola spare parts Feedbacks"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/feedbacks"
            />
            <div className={styles.container}>
                <main className={styles.main}>
                    {loading ? (
                        <div className={styles.loading}><Loading /></div>
                        ) : (
                        feedbacks.map(feedback => (
                            <div key={feedback._id} className={styles.data}>
                                <p><b>Name:</b> {feedback.name}</p>
                                <p><b>Message:</b> {feedback.message}</p>
                                <p><b>Email:</b> {feedback.email}</p>
                            </div>
                        ))
                    )}
                </main>
            </div>
        </>
        
    );
}

export default Feedbacks;