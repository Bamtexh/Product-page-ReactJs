import React from "react";
import { useState } from "react";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://www.kickgame.co.uk/cdn/shop/products/adidas-yeezy-boost-350-v2-onyx-HQ4540_1.png?v=1658230465&width=1024",
    img2: "https://www.kickgame.co.uk/cdn/shop/products/adidas-yeezy-boost-350-v2-onyx-HQ4540_2.jpg?v=1658230467&width=1024",
    img3: "https://www.kickgame.co.uk/cdn/shop/products/adidas-yeezy-boost-350-v2-onyx-HQ4540_3.png?v=1658230470&width=832",
    img4: "https://www.kickgame.co.uk/cdn/shop/products/adidas-yeezy-boost-350-v2-onyx-HQ4540_4.jpg?v=1658230473&width=1024",
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [count, setCount] = useState(1);
  return (
    <div className="flex  flex-col justify-between lg:flex-row gap-16">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt="Yeezy Foam 300 v2"
          className="w-full  h-full aspect-square object-cover  rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt="Yeezy Foam 300 v2"
            className=" bg-[#FAFAFA] w-20 h-20 rounded-md  cursor-pointer"
            onMouseEnter={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt="Yeezy Foam 300 v2"
            className="bg-[#FAFAFA] w-20 h-20 rounded-md cursor-pointer"
            onMouseEnter={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt="Yeezy Foam 300 v2"
            className=" bg-[#FAFAFA] w-20 h-20 rounded-md cursor-pointer"
            onMouseEnter={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt="Yeezy Foam 300 v2"
            className=" bg-[#FAFAFA] w-20 h-20 rounded-md cursor-pointer"
            onMouseEnter={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT SECTION */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="font-semibold text-gray-200 ">ADIDAS</span>
          <h1 className="text-3xl mb-2">Yeezy Boost 350 V2 'Onyx'</h1>
          <p className="text-gray-700">
            The adidas Yeezy Boost 350 V2 ‘Onyx’ applies a stealthy palette to
            the lifestyle silhouette that merges Kanye West’s visionary
            aesthetic with adidas’ performance technology. The sneaker makes use
            of a one-note black Primeknit upper, secured with rope laces and
            equipped with a pull tab at the heel. On the lateral side, a
            post-dyed monofilament stripe adds a see-through element to the
            sock-like build. A full-length Boost midsole is surrounded by a
            ribbed, semi-translucent TPU cage that maintains the shoe’s
            monochrome design.
          </p>
          <h6 className="text-2xl p-2 font-semibold">$319</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setCount(count - 1)}
              >
                &#x2212;
              </button>
              <span className="py-4 px-6 rounded-lg">{count}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-2xl"
                onClick={() => setCount(count + 1)}
              >
                &#43;
              </button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-3 px-5 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
