import styles from "../styles/components/productsComp.module.scss"
import { useState, useEffect } from "react";
import Loading from "components/loading"

const productsComp = () => {

    const productAPI = "api/products"

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(productAPI)
            const data = await response.json()

            setProducts(data)
            setLoading(false);
            
        }
        fetchProducts()
    }, [])

    const handledelete = async (productId) => {
        console.log("clicked");
        const response = await fetch(`${productAPI}/${productId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
    }

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
                    <button onClick={handledelete}>DELETE</button>
                </div>
                ))
            )}
        </div>
     );
}
 
export default productsComp;