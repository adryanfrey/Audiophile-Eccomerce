// sass
import './productPage.sass'

// hooks
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

// store
import store from '../../store/index'
import { useSnapshot } from 'valtio'
import { products } from './data'

const ProductPage = () => {
    // states
    const [quantity, setQuantity] = useState(0)
    const snap = useSnapshot(store)
    const { id } = useParams()
    const product = products[id]

    const handleQuantity = (p) => {
        if (p === '-') {
            if (quantity === 0) return
            setQuantity((prevState) => prevState - 1)
        } else {
            setQuantity((prevState) => prevState + 1)
        }
    }

    // navigation
    const navigate = useNavigate()

    const handleNavigation = (page) => {
        navigate(page)
        window.scrollTo(0, 0)
    }

    // add item to the cart
    const addItem = () => {
        const object = { name: product.id, price: product.price, quantity: quantity }

        if (quantity === 0) {
            toast.warn('Select a quantity')
            return
        }

        // check if product is alreay in the cart
        const checkProduct = snap.items.find((item) => item.name === object.name)

        if (checkProduct) {
            store.items = snap.items.map((item) => {
                if (item.name === object.name) {
                    return { ...item, quantity: quantity + item.quantity }
                } else {
                    return { ...item }
                }
            })
        } else {
            store.items.push(object)
        }

        toast.success('Item added to the cart')
        setQuantity(0)
    }

    return (
        <div className='productPage'>
            <div className='black-bg'></div>
            <div className='go-back'><Link className='body' to='/headphones'>Go Back</Link></div>
            <section className='product'>

                <div className={`product-img-${product.id}`} />

                <div className='product-text'>
                    <h2>{product.name}</h2>
                    <p className='body'>
                        {product.description}
                    </p>
                    <p className='body price'>$ {product.price}</p>
                    <div>
                        <div className='quantity'>
                            <p className='body symbols' onClick={() => handleQuantity('-')}>-</p>
                            <p className='body number'>{quantity}</p>
                            <p className='body symbols' onClick={() => handleQuantity('+')}>+</p>
                        </div>
                        <button onClick={addItem} className='btn-1'>add to cart</button>
                    </div>
                </div>
            </section>
            <section className='features'>
                <div className='features-text'>
                    <h3>features</h3>
                    <p className='body'>
                        {product.features1}
                    </p>
                    <p className='body'>
                        {product.features2}
                    </p>
                </div>
                <div className='features-box'>
                    <h3>in the box</h3>
                    {product.inTheBox.map((item) => {
                        return (
                            <p key={item.item} className='body'>
                                <span>{item.qty}</span>
                                {item.item}
                            </p>
                        )
                    })}
                </div>
            </section>

            <section className='images'>
                <div className='images-container1'>
                    <div className='images-container1-img1'>
                        <img src={product.productImages[0]} alt="product demo" />
                    </div>
                    <div className='images-container1-img2'>
                        <img src={product.productImages[1]} alt="product demo" />
                    </div>
                </div>
                <div className='images-container2'>
                    <img src={product.productImages[2]} alt="product demo" />
                </div>
            </section>

            <section className='other-products'>
                <h3>You may also like</h3>
                <div className='imgs-container'>
                    {product.recommendedProducts.map((item) => {
                        return (
                            <div key={item.name} className='other-products-card'>
                                <img src={item.img} alt="product demo"/>
                                <h4>{item.name}</h4>
                                <button onClick={() => handleNavigation(`/product/${product.id}`)} className='btn-1'>see product</button>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className='group4'>
                <div className='group4-text'>
                    <h2>bringing you the <br></br> <span>best</span> audio gear</h2>
                    <p className='body'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury <br></br> demonstration rooms available for you
                        to browse and <br></br> experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
                        Audiophile the <br></br> best place to buy your portable audio equipment.</p>
                </div>
                <div className='group4-img'>
                </div>
            </section>

        </div>
    )
}

export default ProductPage