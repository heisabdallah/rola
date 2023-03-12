import styles from "../styles/components/productsComp.module.scss"
import { useState, useEffect } from "react";
import Loading from "components/loading"

const productsComp = () => {

    const productAPI = "api/products"

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(productAPI)
            const data = await res.json()

            setProducts(data)
            setLoading(false);
            
        }
        fetchProducts()
    }, [])

    return ( 
        <div className={styles.products}>
            {loading ? (
                <div className={styles.loading}><Loading /></div>
                
                // <p className={styles.loading}>Loading...</p>
                ) : (
                products.map(product => (
                <div key={product.id} className={styles.data}>
                    <p>Name: {product.name}</p>
                    <p>Make: {product.make}</p>
                    <p>Model: {product.model}</p>
                    <p>Price: {product.price}</p>
                </div>
                ))
            )}
        </div>
     );
}
 
export default productsComp;