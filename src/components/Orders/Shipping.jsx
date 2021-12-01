import { useForm } from "react-hook-form"
import { useState } from "react";

export const Shipping = (onSubmit) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [orderData, setOrderData] = useState([])

    // const onSubmit = (data, e) => {
    //     console.log(data);
    //     setOrderData([
    //         ...orderData,
    //         data
    //     ])

    //     e.target.reset();
    // }

    return (
        <div className="flex flex-col w-md:w-full m-4 p-4">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Direccion de Envío
            </h2>
            <form className="justify-center w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Nombre</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "Es necesario saber como te llamas"
                                    }
                                })}
                            />
                            {errors.firstName &&
                                <span className="text-red-400">
                                    {errors.firstName.message}
                                </span>
                            }
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500">Apellido</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("lastName", {
                                    required: {
                                        value: true,
                                        message: "Con tu apellido te encuentra el repartidor"
                                    }
                                })}
                            />
                            {errors.lastName &&
                                <span className="text-red-400">
                                    {errors.lastName.message}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="phone"
                                className="block mb-3 text-sm font-semibold text-gray-500">Teléfono</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Tenemos que llamar, para que recibas tu producto",
                                        valueAsNumber: true,
                                        maxLength: 9
                                    }
                                })}
                            />
                            {errors.phone &&
                                <span className="text-red-400">
                                    {errors.phone.message}
                                </span>
                            }
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="Email"
                                className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                            <input name="email"
                                type="email"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Te enviamos al mail los datos de tu pedido"
                                    }
                                })}
                            />
                            {errors.email &&
                                <span className="text-red-400">
                                    {errors.email.message}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Address"
                                className="block mb-3 text-sm font-semibold text-gray-500">Direccion</label>
                            <textarea
                                className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                cols="20" rows="1"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Es necesaria tu dirección"
                                    }
                                })}
                            ></textarea>
                            {errors.address &&
                                <span className="text-red-400">
                                    {errors.address.message}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-1">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="region" className="block mb-3 text-sm font-semibold text-gray-500">Region</label>
                            <input

                                type="text"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("region", {
                                    required: {
                                        value: true,
                                        message: "Es necesario para ubicar tu dirección"
                                    }
                                })}
                            />
                            {errors.region &&
                                <span className="text-red-400">
                                    {errors.region.message}
                                </span>
                            }
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="provincia" className="block mb-3 text-sm font-semibold text-gray-500">
                                Provincia</label>
                            <input

                                type="text"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("provincia", {
                                    required: {
                                        value: true,
                                        message: "Es necesaria para encontrar tu dirección"
                                    }
                                })}
                            />
                            {errors.provincia &&
                                <span className="text-red-400">
                                    {errors.provincia.message}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-2">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="distrito" className="block mb-3 text-sm font-semibold text-gray-500">Distrito</label>
                            <input

                                type="text"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("distrito", {
                                    required: {
                                        value: true,
                                        message: "Es para llegar a tu dirección"
                                    }
                                })}
                            />
                            {errors.distrito &&
                                <span className="text-red-400">
                                    {errors.distrito.message}
                                </span>
                            }
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                Codigo Postal</label>
                            <input

                                type="number"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-transform: uppercase"
                                {...register("postcode", {
                                    required: {
                                        value: true,
                                        message: "Con esto te ubica el repartidor más rápido",
                                        valueAsNumber: true
                                    },
                                })}

                            />
                            {errors.postcode &&
                                <span className="text-red-400">
                                    {errors.postcode.message}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                        className="block mb-3 text-sm font-semibold text-gray-500"> Referencias e indicaciones para reparto</label>
                        <textarea name="note"
                            className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            rows="1"></textarea>
                    </div>
                </div>
                <input type="submit" />
            </form>

        </div>
    )
}

