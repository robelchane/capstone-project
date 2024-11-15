"use client";
import { useState } from "react";

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
    squareFootage: "",
    yearBuilt: "",
    propertyType: "",
    status: "available",
    parkingSpaces: "",
    lotSize: "",
    isFeatured: false,
    virtualTourLink: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: type === "checkbox" ? checked : value,
    });
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
          squareFootage: "",
          yearBuilt: "",
          propertyType: "",
          status: "available",
          parkingSpaces: "",
          lotSize: "",
          isFeatured: false,
          virtualTourLink: "",
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
      <div>
        <div className="flex flex-col mt-24 mb-16 p-8 max-w-6xl mx-auto">
          <h1 className="text-left text-2xl font-bold mb-8">
            List Your Property
          </h1>
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
              placeholder="Seller Name"
              value={propertyData.sellerName}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            />
            <input
              name="sellerEmail"
              type="email"
              placeholder="Seller Email"
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
            <input
              name="squareFootage"
              type="number"
              placeholder="Square Footage"
              value={propertyData.squareFootage}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            />
            <input
              name="yearBuilt"
              type="number"
              placeholder="Year Built"
              value={propertyData.yearBuilt}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            />
            <input
              name="propertyType"
              type="text"
              placeholder="Property Type (e.g., House, Apartment)"
              value={propertyData.propertyType}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            />
            <select
              name="status"
              value={propertyData.status}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            >
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
            <input
              name="parkingSpaces"
              type="number"
              placeholder="Parking Spaces"
              value={propertyData.parkingSpaces}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            />
            <input
              name="lotSize"
              type="number"
              placeholder="Lot Size (sq ft)"
              value={propertyData.lotSize}
              onChange={handleChange}
              required
              className="text-black border p-2 mb-4 w-full"
            />
            <label className="flex items-center mb-4 text-black">
              <input
                name="isFeatured"
                type="checkbox"
                checked={propertyData.isFeatured}
                onChange={handleChange}
                className="mr-2"
              />
              Featured Property
            </label>
            <input
              name="virtualTourLink"
              type="url"
              placeholder="Virtual Tour Link (optional)"
              value={propertyData.virtualTourLink}
              onChange={handleChange}
              className="text-black border p-2 mb-4 w-full"
            />
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-emerald-700 text-white px-12 py-4 rounded-full hover:bg-yellow-800 transition duration-300"
              >
                {loading ? "Listing..." : "Publish Property"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
