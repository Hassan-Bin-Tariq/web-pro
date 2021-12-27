import React, { useState } from "react"
import "./publish.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Document } from "mongoose"
import * as FilePond from 'filepond';
import 'filepond/dist/filepond.min.css';

const Publish = () => {
    const history = useHistory()
    const [ product, setProduct] = useState({
        name: "",
        description:"",
        price:"",
        countInStock: "",
        ImageUrl:"",
        file: undefined
    })
    const handleChange = e => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }
    const publish = () => {
        
        const { name, description, price, countInStock,ImageUrl,file } = product
        if( name && description && price && countInStock && ImageUrl&&file){
            axios.post("http://localhost:3000/publish", product)
            .then( res => {
                alert(res.data.message)
                history.push("/")
            })            
        } else {
            alert("invlid input")
        }       
    }
    return (
        <div className="Publish">
            
            <h1>Publish</h1>
            <input type="text" name="name" value={product.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="description" value={product.description} placeholder="Your description" onChange={ handleChange }></input>
            <input type="number" name="price" value={product.price} placeholder="Your price" onChange={ handleChange }></input>
            <input type="number" name="countInStock" value={product.countInStock} placeholder="count In the Stock" onChange={ handleChange }></input>
            <input type="text" name="ImageUrl" value={product.ImageUrl} placeholder="the Image Url" onChange={ handleChange }></input>
            <input type="file" name="file" value={product.file} onChange={ handleChange } accept=".pdf,.doc"></input>
            <div className="button" onClick={publish} >publish</div>
        </div>
    )
}
export default Publish