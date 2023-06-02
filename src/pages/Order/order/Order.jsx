import React, { useState } from 'react';
import shopImage from '../../../assets/shop/orderShop.jpg'
import Cover from '../../../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../component/foodCard/FoodCard';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const drinks = menu.filter(item => item.category === 'drinks');
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bristo Boos | Order Food</title>
            </Helmet>
            <Cover
                img={shopImage}
                title={"Order food"}
                description={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
            <div className='mt-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;