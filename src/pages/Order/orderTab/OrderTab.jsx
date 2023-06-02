import React from 'react';
import FoodCard from '../../../component/foodCard/FoodCard';

const OrderTab = ({items}) => {
    return (

        <div className='grid md:grid-cols-3 gap-4 my-14'>
            {
                items.map(item => <FoodCard key={item._id}
                    item={item}></FoodCard>)
            }
        </div>

    );
};

export default OrderTab;