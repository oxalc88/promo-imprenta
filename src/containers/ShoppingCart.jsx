import MyOrder from "../components/Orders/MyOrder";

function ShoppingCart() {
	return (
		<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-coolGray-50 text-coolGray-800">
			<h2 className="text-xl font-semibold">Your cart</h2>
			{products.map((product) =>
				<MyOrder key={product.id} product={product} />
			)}
			<div className="space-y-1 text-right">
				<p>Total amount:
					<span className="font-semibold">357 €</span>
				</p>
				<p className="text-sm text-coolGray-600">Not including taxes and shipping costs</p>
			</div>
			<div className="flex justify-end space-x-4">
				<button type="button" className="px-6 py-2 border rounded-md border-violet-600">Back
					<span className="sr-only sm:not-sr-only">to shop</span>
				</button>
				<button type="button" className="px-6 py-2 border rounded-md bg-violet-600 text-coolGray-50 border-violet-600">
					<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
				</button>
			</div>
		</div>
	)
}

export default ShoppingCart

