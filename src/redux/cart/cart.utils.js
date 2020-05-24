export const addItemToCart = (cartItems,cartItemToAdd) => {
    const exisingCartItem = cartItems.find(
        cartitem => cartitem.id === cartItemToAdd.id
        );
    if(exisingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem , quantity: cartItem.quantity +1}
            : cartItem
            )
    }

    return[...cartItems,{...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart = (cartItems,cartItemToRemove)=>{
    const exisingCartItem = cartItems.find(
        cartItem=>cartItem.id === cartItemToRemove.id
    )
    if(exisingCartItem.quantity === 1){
        return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(
        cartItem=> cartItem.id === cartItemToRemove.id ? {
            ...cartItem, quantity:cartItem.quantity-1
        }: cartItem
    )
}