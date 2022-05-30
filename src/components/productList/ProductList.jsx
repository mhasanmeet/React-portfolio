import React from 'react';
import "./productList.css";
import Product from "../product/Product";
import {products}  from "../../data";

const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Here is my Projects</h1>
                <p className="pl-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy
                </p>
            </div>

            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>

        </div>
            
    )
}

export default ProductList