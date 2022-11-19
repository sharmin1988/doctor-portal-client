import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['/allUser'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser')
            const data = await res.json()
            return data
        }
    })

    const handelAdmin = id => {
        fetch(`http://localhost:5000/allUser/admin/${id}`, {
            method: 'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Make admin successfully')
                    refetch()
                }
            })
    }

    return (
        <div className='p-4'>
            <h2 className='text-3xl mb-4'>All users</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Add Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {allUsers.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handelAdmin(user?._id)}
                                        className='btn bg-green-600 text-white btn-sm'>
                                        Make admin
                                    </button>}</td>

                                <td><button className='btn bg-red-600 text-white btn-sm'>DELETE</button></td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;