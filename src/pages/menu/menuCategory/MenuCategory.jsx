import React from 'react';
import MenuItems from '../../../shared/menuItems/MenuItems';
import Cover from '../../../shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, description }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} description={description}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}>
                    </MenuItems>)
                }
            </div>
            <div className='flex justify-center items-center mb-14'>
                <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4'>order your favourite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;