import React from 'react';
import MenuItems from '../../../shared/menuItems/MenuItems';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import salad from '../../../assets/menu/salad-bg.jpg'

const Recommends = () => {
    return (
        <section>
            <SectionTitle heading="Chef Recommends"
                subHeading="Should Try">
            </SectionTitle>
            <div className='grid md:grid-cols-3 gap-6 my-12'>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <figure><img src={salad} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Caesar Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline hover:bg-[#1F2937]">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <figure><img src={salad} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Caesar Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline hover:bg-[#1F2937]">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <figure><img src={salad} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Caesar Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline hover:bg-[#1F2937]">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;