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
        });
        const data = await response.json();
    
        if (response.ok) {
            // Remove the deleted product from the products state
            setProducts(products.filter(product => product._id !== productId));
        } else {
            console.error(`Failed to delete product with ID ${productId}`);
        }
    };

    return ( 
        <div className={styles.products}>
            {loading ? (
                <div className={styles.loading}><Loading /></div>
                ) : (
                products.map(product => (
                <div key={product._id} className={styles.data}>
                    <p><b>Name:</b> {product.name}</p>
                    <p><b>Make:</b> {product.make}</p>
                    <p><b>Model:</b> {product.model}</p>
                    <p><b>Price:</b> {`Tsh ${product.price} /=`}</p>
                    <br></br>
                    <button onClick={() => handledelete(product._id)}>DELETE</button>
                </div>
                ))
            )}
        </div>
     );
}
 
export default productsComp;