// sass
import './productPage.sass'

// assets
import img1 from '../../assets/Bitmap7.png'
import img2 from '../../assets/Bitmap8.png'
import img3 from '../../assets/Bitmap9.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import img8 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img9 from '../../assets/home/desktop/earphones.png'
import chevron from '../../assets/home/desktop/chevron.png'

// hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// store
import store from '../../store/index'
import { useSnapshot } from 'valtio'

const ProductPage = () => {
    // states
    const [quantity, setQuantity] = useState(0)
    const snap = useSnapshot(store)

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
        const product = { name: 'XX59 HEADPHONES', price: 899, quantity: quantity}

        if (quantity === 0) {
            toast.warn('Select a quantity')
            return
        }

        // check if product is alreay in the cart
        const checkProduct = snap.items.find((item) => item.name === product.name)

        if (checkProduct){
            store.items = snap.items.map((item) => {
                if (item.name === product.name){
                    return {...item, quantity: quantity + item.quantity}
                } else {
                    return {...item}
                }
            })
        } else {
            store.items.push(product)
        }

        toast.success('Item added to the cart')
        setQuantity(0)
    }

    return (
        <div className='productPage'>
            <div className='black-bg'></div>
            <div className='go-back'><Link className='body' to='/headphones'>Go Back</Link></div>
            <section className='product'>
                <div className='product-xx59'>
                    
                </div>
                <div className='product-text'>
                    <h2>XX59 <br></br>Headphones </h2>
                    <p className='body'>
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                    </p>
                    <p className='body price'>$ 899</p>
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
                        These headphones have been created from durable, high-quality materials tough enough to take anywhere.
                        Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is
                        assured by the latest wireless technology engineered for audio synchronization with videos.
                    </p>
                    <p className='body'>
                        More than a simple pair of headphones, this headset features a pair of built-in microphones for clear,
                        hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks
                        to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks
                        to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
                    </p>
                </div>
                <div className='features-box'>
                    <h3>in the box</h3>
                    <p className='body'>
                        <span>1x</span>
                        Headphone Unit
                    </p>

                    <p className='body'>
                        <span>2x</span>
                        Replacement Earcups
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        User Manual
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        3.5mm 5m Audio Cable
                    </p>
                </div>
            </section>

            <section className='images'>
                <div className='images-container1'>
                    <div className='images-container1-img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='images-container1-img2'>
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className='images-container2'>
                    <img src={img3} alt="" />
                </div>
            </section>

            <section className='other-products'>
                <h3>You may also like</h3>
                <div className='imgs-container'>
                    <div className='other-products-card'>
                        <div className="mark2-img"></div>
                        <h4>XX99 MARK II</h4>
                        <button onClick={() => handleNavigation('/headphones/id:jbgy342ewgh2')} className='btn-1'>see product</button>
                    </div>

                    <div className='other-products-card'>
                        <div className="mark1-img"></div>
                        <h4>XX99 MARK I</h4>
                        <button onClick={() => handleNavigation('/headphones/id:lkjnuwedsas1')} className='btn-1'>see product</button>
                    </div>

                    <div className='other-products-card'>
                        <div className="zx9-img"></div>
                        <h4>zx9 speaker</h4>
                        <button onClick={() => handleNavigation('/speakers/id:yubdwudasas3')} className='btn-1'>see product</button>
                    </div>
                </div>
            </section>

            <section className='cards-container'>
                <div onClick={() => handleNavigation('/headphones')} className='card1-container'>
                    <img src={img7} alt="" />
                    <div className='box-shadow'></div>
                    <h6>headphones</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
                </div>

                <div onClick={() => handleNavigation('/speakers')} className='card1-container'>
                    <img src={img8} alt="" />
                    <div className='box-shadow'></div>
                    <h6>speakers</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" />  </button>
                </div>

                <div onClick={() => handleNavigation('/earphones')} className='card1-container'>
                    <img src={img9} alt="" />
                    <div className='box-shadow'></div>
                    <h6>earphones</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
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