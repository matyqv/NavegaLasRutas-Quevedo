import { useState, useEffect } from 'react'
import { productos } from '../data/data.js'
import ItemList from './ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { withFilter } from "../hoc/withFilter.jsx"
const ItemListWithFilter = withFilter(ItemList)

function ItemListContainer(p) {

    const { id } = useParams()
    const [items, setItems] = useState([])


    let filtroProCategoria = ""
    const getProducts = () => new Promise((res, rej) => {
        setTimeout(() => {
            id ? filtroProCategoria = productos.filter(producto => (producto.category.toLocaleLowerCase()).includes(id)) : filtroProCategoria = productos
            res(filtroProCategoria)
        }, 1500);
    })

    useEffect(() => {
        getProducts().then(res => setItems(res))
    }, [id])


    return (
        <div >
            <ItemListWithFilter items={items}/>
        </div>
    )
}
export default ItemListContainer