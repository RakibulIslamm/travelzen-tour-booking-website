import React from 'react';
import { useForm } from 'react-hook-form'

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package Added successfully');
                    reset()
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="px-20 min-h-screen flex justify-center items-center w-full py-20">
            <form onSubmit={handleSubmit(onSubmit)} className="w-8/12">
                <h1 className="text-3xl font-semibold py-5 w-6/12 text-center mx-auto">Add a new package</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridGap: '20px' }}>
                    <input {...register('title', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Tour Title" />
                    <input {...register('cost', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Price" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '20px' }}>
                    <input {...register('duration', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Duration" />
                    <input {...register('group_size', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Group Size" />
                    <input {...register('country', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Country" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
                    <input {...register('date', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Date to Date" />
                    <input {...register('contact', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Phone" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
                    <div>
                        <label>Departure</label>
                        <input {...register('departure', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="datetime-local" />
                    </div>
                    <div>
                        <label>Return</label>
                        <input {...register('return', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="datetime-local" />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
                    <input {...register('img', { required: true })} className=" h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Image URL" />
                    <textarea {...register('overview', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Overview" />
                </div>
                <div className="flex justify-end">
                    <input className="px-12 py-3 rounded bg-yellow-600 text-white cursor-pointer" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddNewPackage;