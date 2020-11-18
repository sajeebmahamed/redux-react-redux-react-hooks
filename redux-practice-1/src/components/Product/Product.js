import React from 'react';

const Product = (props) => {
    const { name, id } = props.product
    const { addToCart } = props 
    
    return (
        <div>
            { name }
            <br/>
            <button onClick={() => addToCart(id, name)}> Add to cart </button>
        </div>
    );
};

export default Product;