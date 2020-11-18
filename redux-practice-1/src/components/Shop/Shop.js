import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../redux/actions/cartActions';

const Shop = (props) => {
    console.log(props);
    const {products, addToCart} = props
    return (
        <div>
            {
                products.map(product => <Product product={product} addToCart={addToCart} key={product.id}></Product> )
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart : addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);