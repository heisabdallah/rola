import styles from "styles/components/googleMap.module.scss"

const GoogleMap = () => {
    return ( 
        <>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.524720198674!2d39.268402715304475!3d-6.827507068683821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b74e5fdce61%3A0x8255b5a1dad5ab92!2sROLA%20SPARE%20PARTS!5e0!3m2!1sen!2snl!4v1678745627432!5m2!1sen!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
        
     );
}
 
export default GoogleMap;