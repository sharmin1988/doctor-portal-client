import React from 'react';

const ErrorElement = () => {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
                <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">Error 404</p>
                        <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Oops! The page you're looking for isn't here.</h1>
                        <p className="mb-5 text-base text-left text-gray-800 md:text-xl">You might have the wrong address, or the page may have moved.</p>
                        <a href="/" className="w-full mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0">Back to homepage</a>
                        <a href="/" className="w-full mb-2 btn btn-lg ml-6 btn-outline sm:w-auto sm:mb-0">Contact us</a>
                    </div>
                    <div>
                        <div className="w-full h-full py-4 rounded-lg">
                            <img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg?w=900&t=st=1669052462~exp=1669053062~hmac=c3f96e9d0a5d1b18cdcbfbbb47cc7ee563fcfd42f6dc481b6254d2c2ac7338ed" alt="" />
                            </div>
                    </div>
                </div>
            </section>
    );
};

export default ErrorElement;