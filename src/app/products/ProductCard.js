export default function ProductCard({name, description, price, quantity = 0, imageUrl}) {
    const isSelected = quantity > 0;
    return (
        <div className="group relative">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none h-80 relative">
                {isSelected && (
                    <span className="absolute w-full h-full">
                    <div className="absolute top-0.5 right-0.5">
                        <span
                            className="bg-black bg-opacity-50 rounded-full py-1 px-3 text-xs font-semibold text-white">3</span>
                    </div>
                </span>
                )}
                <img src={imageUrl}
                     alt="Front of men&#039;s Basic Tee in black."
                     className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between space-x-0 5">
                        <h3 className="text-sm text-gray-700">
                            {name}
                        </h3>
                        <p className="text-sm font-medium text-gray-900">$ {price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 h-12 leading-6">{description}</p>
                </div>
            </div>
            {/*<!-- Add one to cart -->*/}
            <div className="mt-4 flex flex-row justify-between space-x-0.5">
                <button
                    type="button"
                    className="flex-grow text-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                    Agregar
                </button>
                {isSelected && (
                    <button
                        type="button"
                        className="flex-grow text-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                        Remover
                    </button>
                )}
            </div>
        </div>
    );
}