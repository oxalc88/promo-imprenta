import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { ButtonCheckout } from '../components/Buttons/Button'
import MyOrder from "../components/Orders/MyOrder";
import AppContext from '../context/AppContext.js'

const ShoppingCart = () => {
	const [toggleOrder, setToggleOrder] = useState(true)
	
	
	const { state: { cart } } = useContext(AppContext)
	const totalCart = () => {
		const reducer = (accumulator, {product, quantity}) => accumulator + product.price * quantity;
		
		const orderCart = cart.reduce(reducer, 0);
		return orderCart;

	}

	return (
		<Transition.Root show={toggleOrder} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setToggleOrder}>
				<div className="absolute inset-0 overflow-hidden">
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<div className="w-screen max-w-md">
								<div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
									<div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
										<div className="flex items-start justify-between">
											<Dialog.Title className="text-lg font-medium text-gray-900">Carrito de Compras</Dialog.Title>
											<div className="ml-3 h-7 flex items-center">
												<button
													type="button"
													className="-m-2 p-2 text-gray-400 hover:text-gray-500"
													onClick={() => setToggleOrder(false)}
												>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
										</div>

										<div className="mt-8">
											<div className="flow-root">
												<ul role="list" className="-my-6 divide-y divide-gray-200">
													{cart.map(({ product, quantity }) => (
														<MyOrder key={`cartItem-${product.id}`} product={product} quantity={quantity} />
													))}
												</ul>
											</div>
										</div>
									</div>

									<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
										<div className="flex justify-between text-base font-medium text-gray-900">
											<p>Subtotal</p>
											<p>{totalCart()}</p>
										</div>
										<div className="mt-6">
											<Link to="/cart">
												<ButtonCheckout message={'Ir a la bolsa'} />
											</Link>
										</div>
										<div className="mt-6 flex justify-center text-sm text-center text-gray-500">
											<p>
												o{' '}
												<button
													type="button"
													className="text-blue-600 font-medium hover:text-blue-500"
													onClick={() => setToggleOrder(false)}
												>
													Sigue Comprando<span aria-hidden="true"> &rarr;</span>
												</button>
											</p>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default ShoppingCart

