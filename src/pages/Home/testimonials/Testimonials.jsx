import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reViews, setReViews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/revies')
            .then(res => res.json())
            .then(data => {
                setReViews(data);
            })
    }, [])
    return (
        <section className='my-12'>
            <SectionTitle subHeading={"What Our Clients Say"}
                heading={"Testimonials"}>
            </SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reViews.map(reView => <SwiperSlide key={reView._id}>
                            <div className='mx-24 my-8 space-y-4'>
                                <div className='flex justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reView.rating}
                                        readOnly
                                    />
                                </div>
                                <div className='flex justify-center '><FaQuoteLeft className='text-center text-3xl'></FaQuoteLeft> </div>
                                <p>{reView.details}</p>
                                <h3 className='text-3xl text-yellow-500 font-semibold text-center'>{reView.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;