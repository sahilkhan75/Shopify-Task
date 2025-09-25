import React from "react";

export default function HorizontalScrollbar() {
    // Product Data Array
    const products = [
        {
            id: 1,
            name: "Banana Bliss Tee",
            price: "Rs. 1178",
            image:
                "https://i5.walmartimages.com/seo/Cool-Dab-Banana-is-Dabbing-Cute-Dab-Fruit-Lover-Gift-T-Shirt-Black-Color-Size-5-6_c61dc597-313f-43b3-8031-aedc2857dfca.de9ed14978cd94b63fa3ad5f080b3e67.jpeg",
        },
        {
            id: 2,
            name: "Summer Vibes Tee",
            price: "Rs. 1299",
            image:
                "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg",
        },
        {
            id: 3,
            name: "Ocean Wave Tee",
            price: "Rs. 1399",
            image:
                "https://tse2.mm.bing.net/th/id/OIP.qg9n-9dLuZWqAisz7-2oWAHaHh?pid=Api&P=0&h=180",
        },
        {
            id: 4,
            name: "Retro Graphic Tee",
            price: "Rs. 1499",
            image:
                "https://tse1.mm.bing.net/th/id/OIP.2FilFBXBeza5M5dtPN-EewHaHa?pid=Api&P=0&h=180",
        },
        {
            id: 5,
            name: "Street Style Tee",
            price: "Rs. 1599",
            image:
                "https://static.vecteezy.com/system/resources/previews/008/847/294/original/isolated-black-t-shirt-white-hanger-free-png.png",
        },
        {
            id: 6,
            name: "Minimal Logo Tee",
            price: "Rs. 999",
            image:
                "https://miro.medium.com/v2/resize:fit:1024/0*cx3GWhD5RbGD2wti.png",
        },
        {
            id: 7,
            name: "Tie-Dye Oversized",
            price: "Rs. 1799",
            image:
                "https://slatehash.com/cdn/shop/products/VG-SH-46202792.jpg?v=1675584596",
        },
        {
            id: 8,
            name: "Classic White Tee",
            price: "Rs. 899",
            image:
                "https://as1.ftcdn.net/v2/jpg/05/30/51/82/1000_F_530518289_16Gn7Mq03bLrdJhU4QxbPKsx25WfmXXl.jpg",
        },
    ];

    return (
        <div className="w-full my-10">
            <h2 className="text-2xl font-bold mb-4 px-4">You may also like</h2>

            <div className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 w-36 sm:w-44 md:w-56 lg:w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <img
                            className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover rounded-t-lg"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="p-2 text-center">
                            <h3 className="font-semibold text-sm">{product.name}</h3>
                            <p className="text-gray-600 text-xs">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
