"use client"; // To use hooks in a Next.js page
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
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
    image: "", // This will now hold the image file name
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
    <div className="fixed top-0 left-0 z-50 m-2 p-2 cursor-pointer hover:text-blue-500">
      <Link href="./">
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </Link>
    </div>

    <div className="py-8 px-4 m-10">
      <h1 className="text-2xl font-bold mb-4">List Your Property</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Property Name"
          value={propertyData.name}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={propertyData.price}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="bedrooms"
          type="number"
          placeholder="Bedrooms"
          value={propertyData.bedrooms}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="bathrooms"
          type="number"
          placeholder="Bathrooms"
          value={propertyData.bathrooms}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={propertyData.address}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="sellerName"
          type="text"
          placeholder="Your Name"
          value={propertyData.sellerName}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="sellerEmail"
          type="email"
          placeholder="Your Email"
          value={propertyData.sellerEmail}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <textarea
          name="detail"
          placeholder="Property Details"
          value={propertyData.detail}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <textarea
          name="summary"
          placeholder="Property Summary"
          value={propertyData.summary}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          name="image"
          type="text"
          placeholder="Image File Name (e.g., image1.jpg)"
          value={propertyData.image}
          onChange={handleChange}
          required
          className="border p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Listing..." : "List Property"}
        </button>
      </form>
    </div>
    </main>
  );
}
