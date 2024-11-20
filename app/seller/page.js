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
          <h1 className="text-left text-[#001f3f] text-2xl font-serif mb-8">
            List Your Property
          </h1>
          <form onSubmit={handleSubmit}>

            {/* Row 1: Property Name & Price */}
            <div className="flex gap-4 mb-4">
              <input
                name="name"
                type="text"
                placeholder="Property Name"
                value={propertyData.name}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
              <input
                name="price"
                type="text"
                placeholder="Price"
                value={propertyData.price}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
            </div>

            {/* Row 2: Bedrooms & Bathrooms */}
            <div className="flex gap-4 mb-4">
              <input
                name="bedrooms"
                type="number"
                placeholder="Bedrooms"
                value={propertyData.bedrooms}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
              <input
                name="bathrooms"
                type="number"
                placeholder="Bathrooms"
                value={propertyData.bathrooms}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
            </div>

            {/* Row 3: Address, Seller Name, Seller Email */}
            <div className="flex gap-4 mb-4">
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={propertyData.address}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/3"
              />
              <input
                name="sellerName"
                type="text"
                placeholder="Seller Name"
                value={propertyData.sellerName}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/3"
              />
              <input
                name="sellerEmail"
                type="email"
                placeholder="Seller Email"
                value={propertyData.sellerEmail}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/3"
              />
            </div>

            {/* Row 4: Property Details & Summary */}
            <div className="flex gap-4 mb-4">
              <textarea
                name="detail"
                placeholder="Property Details"
                value={propertyData.detail}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
              <textarea
                name="summary"
                placeholder="Property Summary"
                value={propertyData.summary}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
            </div>

            {/* Row 5: Image */}
            <input
              name="image"
              type="file"
              placeholder="Image File Name (e.g., image1.jpg)"
              value={propertyData.image}
              onChange={handleChange}
              required
              className="bg-white text-black border p-2 mb-4 w-full"
            />

            {/* Row 6: Square Footage & Year Built */}
            <div className="flex gap-4 mb-4">
              <input
                name="squareFootage"
                type="number"
                placeholder="Square Footage"
                value={propertyData.squareFootage}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
              <input
                name="yearBuilt"
                type="number"
                placeholder="Year Built"
                value={propertyData.yearBuilt}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
            </div>

            {/* Row 7: Property Type & Status */}
            <div className="flex gap-4 mb-4">
              <select
                name="propertyType"
                value={propertyData.propertyType}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              >
                <option value="">Property Type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Land">Land</option>
              </select>
              <select
                name="status"
                value={propertyData.status}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              >
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            {/* Row 8: Parking Spaces & Lot Size */}
            <div className="flex gap-4 mb-4">
              <input
                name="parkingSpaces"
                type="number"
                placeholder="Parking Spaces"
                value={propertyData.parkingSpaces}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
              <input
                name="lotSize"
                type="number"
                placeholder="Lot Size (sq ft)"
                value={propertyData.lotSize}
                onChange={handleChange}
                required
                className="bg-white text-black border p-2 w-1/2"
              />
            </div>

            {/* Row 9: Virtual Tour Link & Featured Property */}
            <div className="flex gap-4 mb-8">
              <input
                name="virtualTourLink"
                type="url"
                placeholder="Virtual Tour Link (optional)"
                value={propertyData.virtualTourLink}
                onChange={handleChange}
                className="bg-white text-black border p-2 w-1/2"
              />
              <label className="flex items-center w-1/2">
                <input
                  name="isFeatured"
                  type="checkbox"
                  checked={propertyData.isFeatured}
                  onChange={handleChange}
                  className="dark:text-white mr-2"
                />
                Featured Property
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-end">
              <button
                type="submit"
                className="bg-[#001f3f] border text-white px-5 py-3 hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] dark:border-white dark:text-white transition-colors duration-300"
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
