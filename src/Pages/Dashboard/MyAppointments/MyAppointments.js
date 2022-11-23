import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointments = () => {
    const { user } = useContext(AuthContext)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-module-74.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    console.log(bookings)

    return (
        <div className='p-6'>
            <h2 className='text-3xl mb-4'>
                My Appointments
            </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length && bookings?.map((booking, i) =>
                                <tr key={booking._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking?.patientName}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-secondary btn-sm'>pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <span className='text-lg font-semibold text-green-700'
                                            >Payment done</span>
                                        }
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;