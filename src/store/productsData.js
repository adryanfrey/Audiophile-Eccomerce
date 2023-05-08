// recommended products images
import xx99mark2 from '../assets/xx99mark2/xx99mark2.jpg'
import xx99mark1 from '../assets/xx99mark1/xx99mark1.jpg'
import xx59 from '../assets/xx59/xx59.jpg'
import zx7 from '../assets/zx7/zx7.jpg'
import zx9 from '../assets/zx9/zx9.jpg'

// xx59 images
import xx59_1 from '../assets/xx59/xx59demo1.png'
import xx59_2 from '../assets/xx59/xx59demo2.png'
import xx59_3 from '../assets/xx59/xx59demo3.png'

// xx99mark2 images
import xx99mark2_1 from '../assets/xx99mark2/xx99mark2demo1.png'
import xx99mark2_2 from '../assets/xx99mark2/xx99mark2demo2.png'
import xx99mark2_3 from '../assets/xx99mark2/xx99mark2demo3.png'

// xx99mark1 images
import xx99mark1_1 from '../assets/xx99mark1/xx99mark1demo1.png'
import xx99mark1_2 from '../assets/xx99mark1/xx99mark1demo2.png'
import xx99mark1_3 from '../assets/xx99mark1/xx99mark1demo3.png'

// zx7 images
import zx7_1 from '../assets/zx7/zx7demo1.png'
import zx7_2 from '../assets/zx7/zx7demo2.png'
import zx7_3 from '../assets/zx7/zx7demo3.png'

// zx7 images
import zx9_1 from '../assets/zx9/zx9demo1.png'
import zx9_2 from '../assets/zx9/zx9demo2.png'
import zx9_3 from '../assets/zx9/zx9demo3.png'

// yx1 images

import yx1_1 from '../assets/yx1/yx1demo1.png'
import yx1_2 from '../assets/yx1/yx1demo2.png'
import yx1_3 from '../assets/yx1/yx1demo3.png'


export const products = {
    xx59: {
        id: 'xx59',
        name: 'XX59 HEADPHONES',
        price: '899',
        category: 'headphones',
        description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        features1: 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
        features2: 'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
        inTheBox: [{ qty: '1x', item: 'HeadphoneUnit' }, { qty: '2x', item: 'Replacement Earcups' }, { qty: '1x', item: 'User Manual' }, { qty: '1x', item: '3.5mm 5m Audio Cable' }],
        productImages: [xx59_1, xx59_2, xx59_3],
        recommendedProducts: [{ name: 'XX99 MARK II', img: xx99mark2, id: 'xx99mark2' }, { name: 'XX99 MARK I', img: xx99mark1, id: 'xx99mark1' }, { name: 'ZX9 SPEAKER', img: zx9, id: 'zx9' }]
    },
    xx99mark2: {
        id: 'xx99mark2',
        name: 'XX99 MARK II HEADPHONES',
        price: '2999',
        category: 'headphones',
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        features1: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
        features2: 'The advanced Active Noise Cancellation with built-in equalizer allow you t experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
        inTheBox: [{ qty: '1x', item: 'Headphone Unit' }, { qty: '2x', item: 'Replacement Earcups' }, { qty: '1x', item: 'User Manual' }, { qty: '1x', item: '3.5mm 5m Audio Cable' }, { qty: '1x', item: 'Travel Bag' },],
        productImages: [xx99mark2_1, xx99mark2_2, xx99mark2_3],
        recommendedProducts: [{ name: 'XX99 MARK I', img: xx99mark1, id: 'xx99mark1' }, { name: 'XX59 HEADPHONES', img: xx59, id: 'xx59' }, { name: 'ZX9 SPEAKER', img: zx9, id: 'zx9' }]
    },
    xx99mark1: {
        id: 'xx99mark1',
        name: 'XX99 MARK I HEADPHONES',
        price: '1750',
        category: 'headphones',
        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        features1: 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
        features2: 'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
        inTheBox: [{ qty: '1x', item: 'Headphone Unit' }, { qty: '2x', item: 'Replacement Earcups' }, { qty: '1x', item: 'User Manual' }, { qty: '1x', item: '3.5mm 5m Audio Cable' }],
        productImages: [xx99mark1_1, xx99mark1_2, xx99mark1_3],
        recommendedProducts: [{ name: 'XX99 MARK II', img: xx99mark2, id: 'xx99mark2' }, { name: 'XX59 HEADPHONES', img: xx59, id: 'xx59' }, { name: 'ZX9 SPEAKER', img: zx9, id: 'zx9' }]
    },
    zx9: {
        id: 'zx9',
        name: 'ZX9 SPEAKER',
        price: '4500',
        category: 'speakers',
        description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        features1: 'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
        features2: 'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
        inTheBox: [{ qty: '1x', item: 'Speaker Unit' }, { qty: '2x', item: 'Speaker Cloth Panel' }, { qty: '1x', item: 'User Manual' }, { qty: '1x', item: '3.5mm 10m Audio Cable' }, { qty: '1x', item: '10m Optical Cable' }],
        productImages: [zx9_1, zx9_2, zx9_3],
        recommendedProducts: [{ name: 'ZX7 SPEAKER', img: zx7, id: 'zx7' }, { name: 'XX99 MARK I', img: xx99mark1, id: 'xx99mark1' }, { name: 'XX59 HEADPHONES', img: xx59, id: 'xx59' }]
    },
    zx7: {
        id: 'zx7',
        name: 'ZX7 SPEAKER',
        price: '3500',
        category: 'speakers',
        description: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        features1: 'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
        features2: 'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
        inTheBox: [{ qty: '1x', item: 'Speaker Unit' }, { qty: '2x', item: 'Speaker Cloth Panel' }, { qty: '1x', item: 'User Manual' }, { qty: '1x', item: '3.5mm 7.5m Audio Cable' }, { qty: '1x', item: '7.5m Optical Cable' }],
        productImages: [zx7_1, zx7_2, zx7_3],
        recommendedProducts: [{ name: 'ZX9 SPEAKER', img: zx9, id: 'zx9' }, { name: 'XX99 MARK I', img: xx99mark1, id: 'xx99mark1' }, { name: 'XX59 HEADPHONES', img: xx59, id: 'xx59' }]
    },
    yx1: {
        id: 'yx1',
        name: 'YX1 WIRELESS EARPHONES',
        price: '599',
        category: 'earphones',
        description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        features1: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
        features2: 'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
        inTheBox: [{ qty: '2x', item: 'Earphone Unit' }, { qty: '6x', item: 'Multi-size Earplugs' }, { qty: '1x', item: 'User Manual' }, { qty: '1x', item: 'USB-C Charging Cable' }, { qty: '1x', item: 'Travel Pouch' }],
        productImages: [yx1_1, yx1_2, yx1_3],
        recommendedProducts: [{ name: 'XX99 MARK I', img: xx99mark1, id: 'xx99mark1' }, { name: 'XX59 HEADPHONES', img: xx59, id: 'xx59' }, { name: 'ZX9 SPEAKER', img: zx9, id: 'zx9' }]
    }
}