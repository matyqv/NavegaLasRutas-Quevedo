import { useState } from "react"
import styles from './ItemCount.module.css'
function ItemCount() {
    const [count, setCount] = useState(0)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)
    return (
        <div className={styles.Counter}>
            <button onClick={handleSub}>-</button>
            <button>Agregar al Carrito {count}</button>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}
export default ItemCount 