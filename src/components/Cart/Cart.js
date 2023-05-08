import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './cart.sass'

// assets
import xx99mark2 from '../../assets/cart/image-xx99-mark-two-headphones.jpg'
import xx99mark1 from '../../assets/cart/image-xx99-mark-one-headphones.jpg'
import zx9 from '../../assets/cart/image-zx9-speaker.jpg'
import zx7 from '../../assets/cart/image-zx7-speaker.jpg'
import xx59 from '../../assets/cart/image-xx59-headphones.jpg'
import yx1 from '../../assets/cart/image-yx1-earphones.jpg'

// store
import store from '../../store/index'
import { useSnapshot } from 'valtio'

const Cart = ({closeCart}) => {
    // states
    const [totalPrice, setTotalPrice] = useState(0)
    const snap = useSnapshot(store)

    // calc the total price of the products in the cart
    useEffect(() => {
        setTotalPrice(0)

        snap.items.map((item) => {
            let price = item.price
            let quantity = item.quantity
            let total = price * quantity

            setTotalPrice(prevState => prevState + total)

            // remove item when quantity = 0
            if (item.quantity === 0) {
                store.items = snap.items.filter(i => i.name !== item.name)
            }
        })
    }, [snap.items])


    // change the quantity of the items in the cart
    const handleItemQuantity = (p) => {
        if (p.type === '-') {
            store.items = snap.items.map(item => {
                if (item.name === p.name) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        } else {
            store.items = snap.items.map(item => {
                if (item.name === p.name) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        }
    }

    // remove all items from the cart
    const removeAll = () => {
        store.items = []
    }

    // render images conditionaly
    const imgRendering = (src) => {
        console.log(src)
        switch (src) {
            case 'xx99mark2':
                return xx99mark2

            case 'xx99mark1':
                return xx99mark1

            case 'zx9':
                return zx9

            case 'zx7':
                return zx7

            case 'xx59':
                return xx59

            case 'yx1':
                return yx1
        }
    }

    return (
        <>
            <div className='cart-container'>
                <div className="title">
                    <p>Cart ({snap.items.length})</p>
                    <p className='gray-text' onClick={() => removeAll()}>Remove all</p>
                </div>
                {snap.items.map((item) => {
                    return (
                        <div className='cart-item-container' key={item.price}>
                            <img src={imgRendering(item.name)} alt="" />
                            <div className='cart-items-price'>
                                <p className='name'>{item.name}</p>
                                <p className='price'>$ {item.price}</p>
                            </div>
                            <div className='cart-items-quantity'>
                                <p onClick={() => handleItemQuantity({ name: item.name, type: '-' })} className='quantityManagement'>-</p>
                                <p>{item.quantity}</p>
                                <p onClick={() => handleItemQuantity({ name: item.name, type: '+' })} className='quantityManagement'>+</p>
                            </div>
                        </div>
                    )
                })
                }
                {snap.items.length === 0 ? (
                    <div>
                        <p className='noItemText'>Looks like you haven't added any item to the cart yet :( </p>
                        <p onClick={closeCart} className='back'>Back</p>
                    </div>
                ) : (
                    <div>
                        <div className='cart-total'>
                            <p className='text'>total</p>
                            <p className='total-price'>$ {totalPrice}</p>
                        </div>
                        <button onClick={closeCart} className='btn-1'><Link to='/checkout'>Checkout</Link></button>
                        <p onClick={closeCart} className='back'>Back</p>
                    </div>
                )}
            </div>
            <div className='cartFilter'></div>
        </>
    )
}

export default Cart