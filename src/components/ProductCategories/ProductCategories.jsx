import { NavLink } from 'react-router-dom';
import { apiGetCategories } from '../../apis/app';
import { useState, useEffect } from 'react';
import {createSlug} from '../../ulities/helper'
const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiGetCategories();
                // console.log(response.data)
                if(response.data.success) setCategories(response.data.productCategories)
                    else throw new Error("Failed to fetch categories");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <div>Loading categories...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='grid gap-4 grid-cols-2 items-center'>
                {categories?.map((el) => (
                    <NavLink 
                        to={createSlug(el.title)} 
                        key={createSlug(el.title)}
                        className='border w-full h-[150px] justify-self-center flex items-center justify-center rounded-2xl cavieat-font text-[32px]'
                    >{el.title}</NavLink>
                ))}
        </div>
    );
};

export default ProductCategories;
