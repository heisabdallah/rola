import styles from "../styles/components/productsComp.module.scss";
import { useState, useEffect } from "react";

const productAPI = "api/products";

const ProductsComp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(productAPI);
      const data = await res.json();

      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleUpdate = async (id, updatedProduct) => {
    const res = await fetch(`${productAPI}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();

    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...data } : product
      )
    );
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${productAPI}/${id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleCancelEdit = () => {
    setSelectedProduct(null);
  };

  const handleSaveEdit = async (updatedProduct) => {
    await handleUpdate(selectedProduct.id, updatedProduct);
    setSelectedProduct(null);
  };

  const handleAdd = async () => {
    const newProduct = {
      name: "New Product",
      make: "",
      model: "",
      price: 0,
    };
    const res = await fetch(productAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();

    setProducts([...products, data]);
  };

  return (
    <div className={styles.products}>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <>
          {selectedProduct ? (
            <ProductForm
              product={selectedProduct}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <button onClick={handleAdd}>Add Product</button>
              {products.map((product) => (
                <div key={product.id} className={styles.data}>
                  <h3>Name: {product.name}</h3>
                  <p>Make: {product.make}</p>
                  <p>Model: {product.model}</p>
                  <p>Price: {product.price}</p>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    make: product.make,
    model: product.model,
    price: product.price,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]:e
    })}
}

export default ProductsComp;