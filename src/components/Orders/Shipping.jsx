export const Shipping = () => {
    return (
        <div className="flex flex-col w-md:w-full m-4 p-4">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Direccion de Envío
            </h2>
            <form className="justify-center w-full mx-auto" method="post" action>
                <div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Nombre</label>
                            <input name="firstName" type="text" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500">Apellido</label>
                            <input name="lastName" type="text"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="phone"
                                className="block mb-3 text-sm font-semibold text-gray-500">Teléfono</label>
                            <input name="phone" type="number" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="Email"
                                className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                            <input name="email" type="email" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Address"
                                className="block mb-3 text-sm font-semibold text-gray-500">Direccion</label>
                            <textarea
                                className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                name="Address" cols="20" rows="1"></textarea>
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-1">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="region" className="block mb-3 text-sm font-semibold text-gray-500">Region</label>
                            <input name="region" type="text" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="provincia" className="block mb-3 text-sm font-semibold text-gray-500">
                                Provincia</label>
                            <input name="provincia" type="text" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-2">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="distrito" className="block mb-3 text-sm font-semibold text-gray-500">Distrito</label>
                            <input name="distrito" type="text" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                Codigo Postal</label>
                            <input name="postcode" type="number" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                        className="block mb-3 text-sm font-semibold text-gray-500"> Referencias e indicaciones para reparto</label>
                        <textarea name="note"
                            className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            rows="1"></textarea>
                    </div>
                </div>
            </form>

        </div>
    )
}

