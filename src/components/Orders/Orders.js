import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../Review Item/ReviewItem';

const Order = () => {
    const { products, initialCart } = useLoaderData();  // { products: products, initialCart: initialCart}
    const [cart, setCart] = useState(initialCart);
    
    return (
        <div>
            <div className="shop-container">
                <div className="orders-container">
                 {
                       cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                        ></ReviewItem>)
                }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Order;