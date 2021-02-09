import React from 'react'
import Pizza from '../types'
import { useAddToCart } from './AddToCart'
import SpecialOfferCSS from './SpecialOffer.module.css'

// HOC:
// interface Props extends AddToCartProps {
//     pizza: Pizza
// }

interface Props {
    pizza: Pizza
}

const SpecialOffer: React.FC<Props> = ({ 
    pizza, 
    // HOC:
    // addToCart 
}) => {
    // custom hook:
    const addToCart = useAddToCart()
    // HOC & custom hook:
    const handleAddToCartClick = () => {
        addToCart({ 
            id: pizza.id, 
            name: pizza.name, 
            price: pizza.price 
        })
    }
    
    return (
        <div className={SpecialOfferCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            {/* HOC & custom hook: */}
            <button type='button' onClick={handleAddToCartClick}>
                Add to Cart
            </button>
            {/* Render Props: */}
            {/* <WithAddToCartProps>
                {({ addToCart }) => {
                    return (
                        <button  
                            type='button' 
                            onClick={() => {
                                addToCart({ 
                                    id: pizza.id, 
                                    name: pizza.name, 
                                    price: pizza.price 
                                })}
                            }
                        >
                            Add to Cart
                        </button>
                    )
                }}
            </WithAddToCartProps> */}
        </div>
    )
}

// HOC:
// export default withAddToCart(SpecialOffer)
// Render Props & custom hook:
export default SpecialOffer
