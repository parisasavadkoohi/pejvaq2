import React, { useState, useEffect } from 'react';
import '../Categories/categories.css'
import axios from 'axios'
const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            const res = await axios.get('http://pejvaq.posginger.com/odata/Product/GetAdvancedSearchDD')
            setCategories(res.data.categories)
            console.log("res.data", res.data);
        }
        getCategory()
    }, [])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>All Categories</h1>
            <div className="category__wrapper">
                {categories.map(category =>
                    <div key={Math.random()} className="category__item">
                        <h2><a href="#" >{category}</a></h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default Categories