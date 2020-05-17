import createSelctor from '../../../node_modules/reselect/src/index';

const selectCart = state => state.cart;

export const selectCartItems = createSelctor(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount =  createSelctor(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,cartItem)=>
         accumulatedQuantity+cartItem.quantity,0)

)