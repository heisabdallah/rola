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
        const response = await fetch(`${productAPI}/?productId=${productId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
    }

    return ( 
        <div className={styles.products}>
            {loading ? (
                <div className={styles.loading}><Loading /></div>
                ) : (
                products.map(product => (
                <div key={product._id} className={styles.data}>
                    {console.log(product._id)}
                    <p>Name: {product.name}</p>
                    <p>Make: {product.make}</p>
                    <p>Model: {product.model}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={() => handledelete(product._id)}>DELETE</button>
                </div>
                ))
            )}
        </div>
     );
}
 
export default productsComp;