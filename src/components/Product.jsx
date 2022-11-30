import React from "react";

const Product = () => {
  return (
    <div
      id="products"
      className="w-full min-h-[350px] bg-gray-300 scroll-m-20 scroll-smooth"
    >
      <div className="container p-10 space-y-10">
        <h1 className="text-center text-3xl font-bold uppercase text-gray-600">
          our products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          <div className="rounded-t bg-white hover:outline outline-1 outline-green-500">
            <div className="p-5 space-y-5 ">
              <img src="http://anh.co.id/images/box1.jpg" className="rounded" />
            </div>

            <button
              disabled
              className="bg-green-500 text-center text-white py-3 w-full"
            >
              Product Name
            </button>
          </div>
          <div className="rounded-t bg-white hover:outline outline-1 outline-green-500">
            <div className="p-5 space-y-5 ">
              <img src="http://anh.co.id/images/box4.jpg" className="rounded" />
            </div>

            <button
              disabled
              className="bg-green-500 text-center text-white py-3 w-full"
            >
              Product Name
            </button>
          </div>
          <div className="rounded-t bg-white hover:outline outline-1 outline-green-500">
            <div className="p-5 space-y-5 ">
              <img src="http://anh.co.id/images/box2.jpg" className="rounded" />
            </div>

            <button
              disabled
              className="bg-green-500 text-center text-white py-3 w-full"
            >
              Product Name
            </button>
          </div>
          <div className="rounded-t bg-white hover:outline outline-1 outline-green-500">
            <div className="p-5 space-y-5 ">
              <img src="http://anh.co.id/images/box3.jpg" className="rounded" />
            </div>

            <button
              disabled
              className="bg-green-500 text-center text-white py-3 w-full"
            >
              Product Name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
