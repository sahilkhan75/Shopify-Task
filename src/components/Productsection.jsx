import React, { useState } from "react";
import Sizechart from "./Sizechart";
import HorizontalScrollbar from "./HorizontalScrollbar";

export default function Productsection() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);


    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 ">

            <div className="w-screen border-gray-300 border flex justify-between">
                <div className="w-1/2 flex items-center gap-10">
                    <img
                        className="w-30"
                        src="https://tse2.mm.bing.net/th/id/OIP.CZcgiB9rtRYqvSJkX-PpqAHaD4?pid=Api&P=0&h=180"
                        alt=""
                    />
                    <h3 className="hidden sm:block" >Home</h3>
                    <h3 className="hidden sm:block" >Catalog</h3>
                    <h3 className="hidden sm:block" >Contact</h3>
                </div>
                <div className="w-1/2 flex justify-end items-center gap-10 mr-10">
                    <img
                        src="/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                        alt=""
                    />
                    <img
                        src="/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                        alt=""
                    />
                    <img
                        src="/image_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-10 p-6 md:p-10">

                <div className="flex justify-center items-center">
                    <img
                        className="w-full max-w-sm md:max-w-md rounded-lg shadow"
                        src="https://i5.walmartimages.com/seo/Cool-Dab-Banana-is-Dabbing-Cute-Dab-Fruit-Lover-Gift-T-Shirt-Black-Color-Size-5-6_c61dc597-313f-43b3-8031-aedc2857dfca.de9ed14978cd94b63fa3ad5f080b3e67.jpeg"
                        alt="Product"
                    />
                </div>

                <div className=" flex flex-col gap-4">
                    <h6 className="text-gray-400">My Store</h6>
                    <h1 className="text-3xl md:text-5xl font-bold">BANANA BLISS OVERSIZED T-SHIRT</h1>


                    <button
                        className="text-black px-4 py-1 underline cursor-pointer bg-gray-100 rounded"
                        onClick={() => setModalOpen(true)}
                    >
                        View Size Chart
                    </button>

                    <h4 className="text-gray-600 font-semibold text-[14px]">
                        Rs. 1,178.82
                    </h4>
                    <h4 className="text-gray-600">
                        Taxes included{" "}
                        <span className="underline">shipping</span> calculated at checkout
                    </h4>

                    {/* Sizes */}
                    <h4 className="text-gray-600">Size</h4>
                    <div className="mb-4 flex gap-2 flex-wrap">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <button
                                key={size}
                                className="border border-gray-600 px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition cursor-pointer"
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Quantity */}
                    <h4 className="text-gray-600">Quantity</h4>
                    <div className="flex items-center gap-2 mb-4 border w-fit rounded">
                        <button onClick={decreaseQuantity} className="px-3 py-1 cursor-pointer">
                            -
                        </button>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(Math.max(1, Number(e.target.value)))
                            }
                            className="w-12 border-none text-center rounded outline-none"
                        />
                        <button onClick={increaseQuantity} className="px-3 py-1 cursor-pointer">
                            +
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col  gap-2">
                        <button className="w-full  text-black border p-2 cursor-pointer hover:bg-gray-100">Add to cart</button>
                        <button className="w-full  bg-black text-white p-2 cursor-pointer">Buy it now</button>
                    </div>

                    {/* Modal */}
                    <Sizechart
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                    />
                </div>
            </div>


            <HorizontalScrollbar />

        </div>
    );
}

