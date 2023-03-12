
const postProduct = () => {

    const productAPI = "api/products"

    return ( 
        <div className={styles.form}>
            <form method="POST" action={productAPI} >
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label for="make">Make:</label>
                <input type="text" id="make" name="make" />

                <label for="model">Model:</label>
                <input type="text" id="model" name="model" />

                <label for="price">Price:</label>
                <input type="number" id="price" name="price" />

                <input type="submit" value="Submit"/>
            </form>
        </div>
     );
}
 
export default postProduct;