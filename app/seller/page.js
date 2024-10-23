"use client";
import { useState } from "react";
import Link from "next/link";

export default function Seller() {
  const [propertyData, setPropertyData] = useState({
    name: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    address: "",
    sellerName: "",
    sellerEmail: "",
    detail: "",
    summary: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (response.ok) {
        alert("Property listed successfully!");
        setPropertyData({
          name: "",
          price: "",
          bedrooms: "",
          bathrooms: "",
          address: "",
          sellerName: "",
          sellerEmail: "",
          detail: "",
          summary: "",
          image: "",
        });
      } else {
        alert("Failed to list property.");
      }
    } catch (error) {
      console.error("Failed to list property", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div 
        className="flex flex-col items-center text-white" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/sellerbackground.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
 
      <div className="bg-white rounded-lg shadow-lg py-8 px-4 mt-28 max-w-4xl mx-auto">
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/contact" className="text-white p-3 hover:underline">
          Want to get in touch?
        </Link>
      </div>
            <h1 className="text-center text-4xl text-black font-bold mb-12">List Your Property</h1>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Property Name"
                value={propertyData.name}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="price"
                type="text"
                placeholder="Price"
                value={propertyData.price}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="bedrooms"
                type="number"
                placeholder="Bedrooms"
                value={propertyData.bedrooms}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="bathrooms"
                type="number"
                placeholder="Bathrooms"
                value={propertyData.bathrooms}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={propertyData.address}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="sellerName"
                type="text"
                placeholder="Your Name"
                value={propertyData.sellerName}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="sellerEmail"
                type="email"
                placeholder="Your Email"
                value={propertyData.sellerEmail}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <textarea
                name="detail"
                placeholder="Property Details"
                value={propertyData.detail}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <textarea
                name="summary"
                placeholder="Property Summary"
                value={propertyData.summary}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <input
                name="image"
                type="text"
                placeholder="Image File Name (e.g., image1.jpg)"
                value={propertyData.image}
                onChange={handleChange}
                required
                className="text-black border p-2 mb-4 w-full"
              />
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="bg-yellow-700 text-white px-12 py-4 rounded hover:bg-yellow-800 transition duration-300"
                >
                  {loading ? "Listing..." : "List Property"}
                </button>
              </div>
            </form>
          </div>
        </div>
    </main>
  );
}
