import styles from "../styles/components/productsComp.module.scss"
import { useState, useEffect } from "react";
import Loading from "components/loading"

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
        <div className={styles.container}>
            <div className={styles.feedbacks}>
                {loading ? (
                    <div className={styles.loading}><Loading /></div>
                    ) : (
                    feedbacks.map(feedback => (
                        <div key={feedback._id} className={styles.data}>
                            <p><b>Name:</b> {feedback.name}</p>
                            <p><b>Make:</b> {feedback.message}</p>
                            <p><b>Model:</b> {feedback.email}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Feedbacks;