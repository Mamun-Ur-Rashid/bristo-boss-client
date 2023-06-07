import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_image_secret;
const AddItem = () => {
    const [axiosSecure] =UseAxiosSecure();
    const { register, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method : 'POST',
            body: formData
        })
        .then (res => res.json())
        .then(imgResponse => {
           if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
            .then(data => {
               if(data.data.insertedId){
                Swal.fire({
                    position: 'top-right',
                    icon: 'success',
                    title: 'Your item successfully added',
                    showConfirmButton: false,
                    timer: 1500
                  })
               }
            })
           }
        })
    }
    return (
        <div className='w-full mt-14'>
            <SectionTitle subHeading={"What's new?"} heading={"add an item"}></SectionTitle>
            <div className='mx-[120px]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label htmlFor="">Recipe name*</label>
                        <input className='form-control border-2 p-2 rounded-lg w-full' {...register("name")} placeholder='Recipe name' />
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label htmlFor="">Category*</label>
                            <select className='form-control border-2 p-2 rounded-lg w-full' {...register("category")}>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Soups">Soups</option>
                            </select>
                        </div>
                        <div className=''>
                            <label htmlFor="">Price*</label>
                            <input className='form-control border-2 p-2 rounded-lg w-full' {...register("price")} placeholder='Price' />
                        </div>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="">Recipe Details*</label>
                        <textarea className='form-control border-2 p-2 rounded-lg w-full h-40' {...register("recipe")} placeholder='Recipe Details' />
                    </div>
                    <div>
                        <label htmlFor="">Item Image*</label>
                        <input type="file" className='file-input form-control border-2  rounded-lg w-full' {...register("image")} placeholder='Choose File' />
                    </div>
                    <div className='mt-4'>
                        <input className='btn btn-sm' type="submit" value='Add Item' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;