import styles from "styles/components/buttons/getDirections.module.scss"
import Link from "next/link";

const GetDirections = () => {
    return ( 
        <>
            <Link className={styles.directions} href="https://goo.gl/maps/NdQw9WuQqd8szwax6" target="_blank">Get Directions</Link>
        </>
     );
}
 
export default GetDirections;