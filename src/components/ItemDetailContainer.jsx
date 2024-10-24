import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { productos } from '../data/data.js'
import ItemDetail from "./ItemDetail/ItemDetail.jsx"

export default function ItemDetailContainer(){
    const {id}=useParams()
    const[detail,setDetail] =useState([id])

    const getProducts = () => new Promise((res, rej) => {
        setTimeout(() => {           
            const FiltroPorID = productos.filter(producto => producto.id == id)
            res(FiltroPorID[0])            
            console.log(FiltroPorID[0])
        }, 150);
    })
    
    useEffect(() => {
        getProducts().then(res => setDetail(res))
    }, [])
    console.log(detail)
    return(
        <div > 
             <ItemDetail item={detail} />
        </div>
    )
}