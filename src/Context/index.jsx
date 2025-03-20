import { createContext, useState } from 'react'
import PropTypes from "prop-types"

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart - add product to cart
    const [cartProducts, setCartProducts] = useState([]);

    ShoppingCartProvider.propTypes = {
            children: PropTypes.node.isRequired,
        }
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext } 