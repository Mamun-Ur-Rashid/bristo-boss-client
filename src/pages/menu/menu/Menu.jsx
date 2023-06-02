import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'

import Cover from '../../../shared/cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImage} title={"Our menu"} description={"Would You like to try a dish?"}></Cover>

            <section className='mt-12'>
                <SectionTitle subHeading={"Don't miss"} heading={"today's offer"}></SectionTitle>
            </section>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}
            <MenuCategory items={desserts} title={"desserts"} img={dessertImage}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>

            </MenuCategory>
            {/* pezza menu items */}
            <MenuCategory 
            items={pizza} title={"pizza"} img={pizzaImage}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>

            </MenuCategory>
            {/* salad menu items */}
            <MenuCategory
            items={salads}title={"salads"} img={saladImage}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            >
            </MenuCategory>
            {/* soup menu items */}
            <MenuCategory 
            items={soups} title={"soups"} img={soupImage}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
        </div>
    );
};

export default Menu;