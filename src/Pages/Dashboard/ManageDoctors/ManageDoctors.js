import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ActionModal from '../../Shared/ActionModal/ActionModal';
import Loader from '../../Shared/Loader/Loader';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState('')

    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-module-74.vercel.app/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const cancleDelete = () => {
        setDeletingDoctor(null)
    }
    
    const handelDeleteDoctor = doctor => {
        console.log(doctor)
        fetch(`https://doctors-portal-server-module-74.vercel.app/doctors/${doctor._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success('Doctor data deleted successfully!!!!')
                        refetch()
                    }
                })
    }

    // const handelDelete = id => {
    //     const proceed = window.confirm('Are u sure to delete??')
    //     if (proceed) {
    //         fetch(`https://doctors-portal-server-module-74.vercel.app/doctors/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount) {
    //                     toast.success('Doctor data deleted successfully!!!!')
    //                     refetch()
    //                 }
    //             })
    //     }

    // }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='p-4 '>
            <h2 className="text-3xl mb-4">Manage Doctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr
                                key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="my-modal" className="btn btn-error bg-red-600 text-white btn-xs">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ActionModal
                    title={'Are you sure u want to delete??'}
                    message={`If u delete ${deletingDoctor.name}!! it's can't be undone!!!`}
                    closeModal={cancleDelete}
                    successAction={handelDeleteDoctor}
                    modalData={deletingDoctor}
                    successActionBtnName={'Delete'}
                ></ActionModal>
            }
        </div>
    );
};

export default ManageDoctors;