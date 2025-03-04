import { apiGetCategories } from '../../apis/app';
import { useState, useEffect } from 'react';

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
        <div>
            <h2>Các loại đồ uống tại Zuna đâyyyy</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCategories;
