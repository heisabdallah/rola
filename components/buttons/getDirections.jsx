import styles from "styles/components/buttons/getDirections.module.scss"
import Link from "next/link";

const GetDirections = () => {
    return ( 
        <>
            <Link className={styles.directions} href="https://www.google.com/maps/dir//ROLA+SPARE+PARTS/@-6.8275073,39.2005508,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x185c4b74e5fdce61:0x8255b5a1dad5ab92!2m2!1d39.2705914!2d-6.8275124" target="_blank">Get Directions</Link>
        </>
     );
}
 
export default GetDirections;