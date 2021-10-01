import React from 'react'

export default function Products(props) {
    return (
        <div>
            <h1>Product Name: {props.products.name}</h1>
            <p>Price: {props.products.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <h2>Description: {props.products.description}</h2>
        </div>
    )
}