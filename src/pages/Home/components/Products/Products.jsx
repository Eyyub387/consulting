import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import { GiLoveHowl } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

     
    if (loading) {
        return <div className={styles.loading}>LOADING...</div>;
    }

    return (
        <div className={styles.container}>
            {products.map((product) => (
                <div key={product.id} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <img src={product.thumbnail} alt={product.title} className={styles.image} />
                        <br />
                        <br />
                        <br />

                        <div className={styles.buttons}>
                            <button className={styles.button}><a href="./Wish"><MdFavorite /></a>
                            </button>
                            <button className={styles.button}> <a href="./Basket"><FaShoppingBasket /></a> </button>
                        </div>
                    </div>
                    <br />
                    <h3 className={styles.title}>{product.title}</h3>
                    <br />
                    <p className={styles.price}>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;