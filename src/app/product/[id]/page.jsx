"use client";

import NewArrivalCard, { newArrivals } from "@/components/NewArrivalCard";

import { Star, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import { useEffect, useState } from "react";
import "ldrs/ripples";
import { ShoppingBagButton } from "@/components/ShoppingBag";

// Import newArrivals or wherever your data is stored

const ProductDetail = () => {
  const { id } = useParams(); // Use useParams to access the dynamic parameter (id)
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("white");
  const [activeTab, setActiveTab] = useState("reviews");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const reviews = [
    {
      id: 1,
      author: "Cameron Williamvvvson",
      rating: 4,
      comment: "Very Nice!!",
      date: "3 days",
      likes: 10,
    },
    {
      id: 2,
      author: "Cameron Williamson",
      rating: 4,
      comment: "Very Nice!!",
      date: "3 days",
      likes: 10,
    },
  ];

  const ratingCounts = {
    5: 50,
    4: 5,
    3: 10,
    2: 30,
    1: 2,
  };

  const images = ["/th1.png", "/th2.png"];

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["white", "black"];

  useEffect(() => {
    if (id) {
      const foundProduct = newArrivals.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]); // Re-run when 'id' changes

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev > 0 ? prev - 1 : images.length - 1
                )
              }
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={product.imageUrl} // Fetch the image from product.imageUrl
              alt="Product image"
              className="object-cover rounded-lg w-full h-full"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev < images.length - 1 ? prev + 1 : 0
                )
              }
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-purple-600"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={index === 0 ? product.imageUrl : image} // Use product.imageUrl for the first thumbnail
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <span className="inline-block bg-purple-900 text-white px-2 py-1 rounded-full text-sm">
            New Arrival
          </span>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({ratingCounts[product.rating]})
            </span>
            <span className="text-sm text-purple-600 font-bold">
              {product.reviews} Reviews
            </span>
          </div>

          <div className="text-2xl font-bold">BDT {product.price}</div>

          <div className="space-y-4 py-8 border-y-2">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <h3 className="font-medium mb-4">Available Size</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded ${
                        selectedSize === size
                          ? "bg-transparent text-[#7E53D4] border border-[#7E53D4]"
                          : "text-[#7E53D4]"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected Size:{" "}
                    <span className="font-medium">{selectedSize}</span>
                  </p>
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-medium mb-6">Available Color</h3>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-purple-600"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
                {selectedColor && (
                  <p className=" text-sm pt-4 text-gray-600">
                    Selected Color:{" "}
                    <span className="font-medium">{selectedColor}</span>
                  </p>
                )}
              </div>

              <div class="pl-4">
                <ShoppingBagButton itemCount={0} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium py-5">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                className="p-2 border rounded"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                className="p-2 border rounded"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
              Buy Now
            </button>
            <button className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mb-12">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "details" ? "border-b-2 border-purple-600" : ""
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "reviews" ? "border-b-2 border-purple-600" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Review & Rating
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "discussion" ? "border-b-2 border-purple-600" : ""
            }`}
            onClick={() => setActiveTab("discussion")}
          >
            Discussion
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "details" && (
            <div className="prose max-w-none">
              <p>Product details content goes here...</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Reviews Section */}
              <div className="flex-1 space-y-6">
                <div className="relative inline-block text-left">
                  {/* Dropdown Button */}
                  <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md border border-[#7E53D4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Newest
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left bg-white border border-gray-200 rounded-md shadow-lg">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Latest
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Most Popular
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Most Commented
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Oldest
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src="/review.png"
                        alt="description"
                        className="w-12 h-12 rounded-full"
                      />

                      <div>
                        <div className="font-medium">{review.author}</div>
                        <div className="text-sm text-gray-600">
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p>{review.comment}</p>
                    <button className="text-sm text-gray-600 mt-2">
                      👍 {review.likes}
                    </button>
                  </div>
                ))}
              </div>

              {/* Rating Summary Section */}
              <div className="w-full lg:w-1/3 flex items-center gap-8">
                <div className="flex-1 space-y-2">
                  <div className="flex flex-row pb-4 gap-8">
                    <div className="text-base text-black font-bold">
                      Product Review
                    </div>
                    <div className="text-base font-bold text-[#581FC1]">
                      121 reviews
                    </div>
                  </div>
                  <div className="text-center flex flex-row justify-between ">
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-10 h-10 gap-4 ${
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-4xl font-bold ">(4.0)</div>
                  </div>
                  {Object.entries(ratingCounts)
                    .reverse()
                    .map(([rating, count]) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="w-4">{rating}</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{
                              width: `${(count / 97) * 100}%`,
                            }}
                          />
                        </div>
                        <div className="w-8 text-sm text-gray-600">{count}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "discussion" && (
            <div className="prose max-w-none">
              <p>Discussion content goes here...</p>
            </div>
          )}
        </div>
      </div>
      <NewArrivalCard />
    </div>
  );
};

export default ProductDetail;
