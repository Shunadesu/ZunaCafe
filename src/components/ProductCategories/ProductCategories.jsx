import { NavLink } from 'react-router-dom';
import {createSlug} from '../../ulities/helper'
import { useSelector } from 'react-redux';

const ProductCategories = () => {
    const {categories} = useSelector(state => state.app)
    return (
        <div className='grid gap-4 grid-cols-2 items-center'>
                {categories?.map((el) => (
                    <NavLink 
                        to={createSlug(el.title)} 
                        key={createSlug(el.title)}
                        className={({isActive}) => isActive ?  
                                'border w-full h-[150px] bg-amber-200 justify-self-center flex items-center justify-center rounded-2xl flower-font text-[32px]' 
                                : 'border w-full h-[150px] justify-self-center flex items-center justify-center rounded-2xl flower-font text-[32px]'}
                    >{el.title}</NavLink>
                ))}
        </div>
    );
};

export default ProductCategories;
