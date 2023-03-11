import styles from "../styles/products.module.scss"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import CustomHead from "../components/props/customHead"
import logo from "public/logo.png"

const About = () => {
    const productAPI = "api/products"

    const [nav, setNav] = useState(styles.nav)

    const handleOpenNav = () => {
        setNav(styles.openNav)
    }

    const handleCloseNav = () => {
        setNav(styles.closeNav)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(productAPI)
            const data = await res.json()

            setProducts(data)
            
        }
        fetchProducts()
    })

    return ( 
        <>
            <CustomHead
                title="About"
                description="Rola spare parts about"
                keywords="rola spare parts, used spare parts, car spare parts tanzania"
                url="https://www.rolaspareparts.com/about"
            />
            <div className={styles.container}>
                <header className={styles.header}>
                    <svg className={styles.menuBtn} onClick={handleOpenNav} viewBox="0 0 100 80">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                    <h3>ROLA SPARE PARTS</h3>
                    <nav className={nav}>
                        <svg className={styles.closeBtn} onClick={handleCloseNav} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM15.6 17L12 13.4L8.4 17L7 15.6L10.6 12L7 8.4L8.4 7L12 10.6L15.6 7L17 8.4L13.4 12L17 15.6L15.6 17Z"/>
                        </svg>

                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logo}
                            width={34}
                            height={34}
                            alt="logo"
                        />
                    </Link>
                </header>
                <main className={styles.main} onClick={handleCloseNav}>
                    <h1>About PAGE</h1>
                    <p>Sunt velit et mollit esse enim do cillum consectetur dolore excepteur magna. Nisi tempor minim anim ea magna ad voluptate in. Amet deserunt magna incididunt consectetur. Eu qui culpa sit minim dolor esse consequat.</p>
                    <p>Eiusmod eu nulla ad duis veniam mollit commodo commodo dolor. Id cillum occaecat voluptate ipsum et laboris proident occaecat occaecat. Quis aliqua veniam aute duis qui velit ea aute laborum. Tempor consectetur mollit aliqua excepteur occaecat voluptate aliquip exercitation eu enim. Occaecat qui proident excepteur sunt laborum minim consequat. Consequat aliqua officia deserunt quis commodo proident aliqua enim culpa aute. Fugiat cillum deserunt aliqua fugiat dolor elit commodo.</p>

                    {   
                        products.map(product => (
                            <div key={product.id} className={styles.data}>
                                <h3>{product.name}</h3>
                                <p>{product.make}</p>
                                <p>{product.model}</p>
                                <p>{product.price}</p>
                            </div>
                        )
                            
                        )
                    }
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
                    

                </main>

            </div>
        </>
        
     )
}

export default About;