import createSelctor from '../../../node_modules/reselect/src/index';

const selectCart = state => state.cart;

export const selectCartItems = createSelctor(
    [selectCart],
    (cart) => cart.cartItems
);
export const selectCartHidden = createSelctor(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount =  createSelctor(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,cartItem)=>
         accumulatedQuantity+cartItem.quantity,0)

)
export const selectCartTotal = createSelctor(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (Total,cartItem)=>
        Total + cartItem.quantity * cartItem.price,0
    )
);