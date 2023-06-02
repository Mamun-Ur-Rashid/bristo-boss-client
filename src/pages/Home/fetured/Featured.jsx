import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './feured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed md:px-56 md:py-32   text-white my-12'>
            <SectionTitle
            heading="From Our Menu" subHeading="Check it out"> 

            </SectionTitle>
            <div className='grid md:grid-cols-2 justify-center items-center gap-10 bg-slate-500 bg-opacity-60'>
                <div>
                    <img className='' src={featured} alt="" />
                </div>
                <div className='space-y-2'>
                    <p>March 20, 2024</p>
                    <p>WHERE Can i get some?</p>
                    <p><small>explicabo autem tenetur vitae. Omnis repudiandae esse illum natus animi. Ullam commodi obcaecati nulla praesentium eaque, distinctio, sapiente omnis nobis doloribus architecto inventore voluptates cum? Iste obcaecati </small> </p>
                    <button className='btn btn-outline text-white border-0 border-b-4'>read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;