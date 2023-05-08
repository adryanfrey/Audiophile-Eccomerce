import { proxy } from 'valtio'

// manages the cart
const store = proxy({
    items: []
})

export default store