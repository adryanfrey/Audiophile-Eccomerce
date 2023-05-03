import { proxy } from 'valtio'

const store = proxy({
    items: []
})

export default store