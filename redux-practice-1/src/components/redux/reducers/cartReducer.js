
const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: [],
    products:  [
        { name: 'Lenovo', id: 1 },
        { name: 'Sony', id: 2 },
        { name: 'Asus', id: 3 },
        { name: 'Apple', id: 4 },
        { name: 'Hp', id: 5 },
    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART : 
            console.log(action);
            // const newId = action.id
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
                    return {
                        // cart: [...state.cart, action.id]
                        cart: newCart,
                        products: state.products
                    }
        case REMOVE_FROM_CART : {
            const newId = action.id
            const remainingCart = state.cart.filter(item => item.cartId !== newId)
            return {
                ...state, cart: remainingCart,
                // products: state.products
            }
        }
        default:
            return state
    }
}
export default cartReducer