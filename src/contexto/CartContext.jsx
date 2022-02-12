import { createContext, useState } from "react";

// Creamos el contexto "CartContext"
export const CartContext = createContext();

// Personalizamos el "CartContext.Provider"
const CartContextProvider = ( { children } ) => {
    // Creamos los estado locales
    const [ cartList, setCartList ] = useState( [] );

    const addToCart = ( producto, cant ) => {
        // Verificamos si el producto existe en el carrito
        let isInCart = cartList.find( 
            item => item.idItem === producto.id 
        );
        
        if ( isInCart === undefined ) {
            setCartList( [
                ...cartList,
                {
                    itemId:     producto.id,
                    itemImagen: producto.imagenUrl,
                    itemNombre: producto.nombre,
                    itemPrecio: producto.precio,
                    itemCant:   cant
                }
            ] );
        } else {
            isInCart.cantItem += cant;

            setCartList( [
                ...cartList
            ] );
        }
    }

    const clearCart = () => {
        setCartList( [] );
    }

    const removeItem = ( id ) => {
        let filtro = cartList.filter( 
            item => item.itemId != id 
        );
        setCartList( filtro );
    }

    return (
        // Agregamos los estados locales para hacerlos globales (enviar como objetos, entre "{}")
        <CartContext.Provider value={ { cartList, addToCart, clearCart, removeItem } }>
            {/* Configuramos los hijos */}
            { children }
        </CartContext.Provider>
    );
};
// Si exportamos por default, cuando importamos no es necesario el uso de llaver "{}"
export default CartContextProvider; 