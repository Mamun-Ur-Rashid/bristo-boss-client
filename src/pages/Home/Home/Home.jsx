import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import BristoBoos from '../bristoBoos/BristoBoos';
import PopularMenu from '../popularMenu/PopularMenu';
import ContactUs from '../constactus/ContactUs';
import Recommends from '../recommends/Recommends';
import Featured from '../fetured/Featured';
import Testimonials from '../testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BristoBoos></BristoBoos>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;