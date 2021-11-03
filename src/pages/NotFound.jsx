import React from 'react';
import { Link } from 'react-router-dom';
import { BacktoHomeButton } from '../components/Buttons/Button';

const NotFound = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-800">

                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">404</h1>
                        <p className="mt-6 text-gray-500 dark:text-gray-300">Este camino no está diseñado. No tiene principio, no va a ningún lado.</p>
                        <Link to={"/"}>
                            <BacktoHomeButton message={"Guarda el secreto, sigue el camino"} />
                        </Link>
                        <p className="mt-3 text-sm text-gray-400 ">Y es que el camino no es el camino</p>
                    </div>

                </div>
            </section>
        </>
    );
}

export { NotFound }