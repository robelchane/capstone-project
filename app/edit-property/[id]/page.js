"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams for Next.js 13

export default function EditProperty() {
  const { id } = useParams(); // Get the property ID directly from the URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Success message state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state

  useEffect(() => {
    if (id) {
      // Fetch the specific property data by ID
      const fetchProperty = async () => {
        try {
          const response = await fetch(`/api/properties/${id}`);
          const data = await response.json();
          if (response.ok) {
            setProperty(data.property);
          } else {
            setError("Property not found");
          }
        } catch (err) {
          setError("Error fetching property data");
        } finally {
          setLoading(false);
        }
      };

      fetchProperty();
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to update
    const updatedProperty = {
      ...property,
      name: event.target.name.value,
      price: event.target.price.value,
      summary: event.target.summary.value,
      address: event.target.address.value,
      bedrooms: event.target.bedrooms.value, // Bedroom count
      bathrooms: event.target.bathrooms.value, // Bathroom count
      sellerName: event.target.sellerName.value, // Seller's name
      sellerEmail: event.target.sellerEmail.value, // Seller's email
      squareFootage: event.target.squareFootage.value, // Square footage
      yearBuilt: event.target.yearBuilt.value, // Year built
      propertyType: event.target.propertyType.value, // Property type
      status: event.target.status.value, // Property status
      parkingSpaces: event.target.parkingSpaces.value, // Number of parking spaces
      lotSize: event.target.lotSize.value, // Lot size
      image: event.target.image.files[0]?.name, // Assume the image is updated
    };

    try {
      const response = await fetch(`/api/properties/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedProperty),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Display success prompt with the text you want
        setSuccessMessage("Property updated successfully!"); // Display success message
        setErrorMessage(null); // Clear any previous error messages
        setTimeout(() => {
          window.location.href = "/manager"; // Redirect after successful update
        }, 2000); // Wait 2 seconds before redirecting
      } else {
        setErrorMessage("Failed to update property");
        setSuccessMessage(null); // Clear any previous success messages
      }
    } catch (err) {
      setErrorMessage("Error updating property");
      setSuccessMessage(null); // Clear any previous success messages
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="bg-white rounded-lg shadow-lg py-8 px-4 mt-28 max-w-4xl mx-auto">
      <h2 className="w-full flex justify-center text-3xl font-bold bg-blue-400 text-white border border-gray-300 mb-4 p-2">
        Edit Property</h2>
      {/* Display success message */}
      {successMessage && (
        <div className="text-green-500 font-bold mb-4">{successMessage}</div> 
      )}
      {/* Display error message */}
      {errorMessage && (
        <div className="text-red-500 font-bold mb-4">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-base font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={property.name}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-base font-medium">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={property.price}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="bedrooms" className="block text-base font-medium">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            defaultValue={property.bedrooms}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="bathrooms" className="block text-base font-medium">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            defaultValue={property.bathrooms}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-base font-medium">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue={property.address}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="sellerName" className="block text-base font-medium">Seller Name</label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            defaultValue={property.sellerName}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="sellerEmail" className="block text-base font-medium">Seller Email</label>
          <input
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            defaultValue={property.sellerEmail}
            className="w-full p-2 border rounded"
            required
          />
        </div>                        
        <div>
          <label htmlFor="summary" className="block text-base font-medium">Property Summary</label>
          <textarea
            id="summary"
            name="summary"
            defaultValue={property.summary}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>


        <div>
          <label htmlFor="squareFootage" className="block text-base font-medium">Square Footage</label>
          <input
            type="number"
            id="squareFootage"
            name="squareFootage"
            defaultValue={property.squareFootage}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="yearBuilt" className="block text-base font-medium">Year Built</label>
          <input
            type="number"
            id="yearBuilt"
            name="yearBuilt"
            defaultValue={property.yearBuilt}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-base font-medium">Property Type</label>
          <select
            id="propertyType"
            name="propertyType"
            defaultValue={property.propertyType}
            className="w-full p-2 border rounded"
            required
          >
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-base font-medium">Status</label>
          <select
            id="status"
            name="status"
            defaultValue={property.status}
            className="w-full p-2 border rounded"
            required
          >
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
            <option value="Pending">Pending</option>
            <option value="Leased">Leased</option>
          </select>
        </div>
        <div>
          <label htmlFor="parkingSpaces" className="block text-base font-medium">Parking Spaces</label>
          <input
            type="number"
            id="parkingSpaces"
            name="parkingSpaces"
            defaultValue={property.parkingSpaces}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="lotSize" className="block text-base font-medium">Lot Size</label>
          <input
            type="number"
            id="lotSize"
            name="lotSize"
            defaultValue={property.lotSize}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-base font-medium">Property Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
            Update Property
          </button>
        </div>
      </form>
    </div>
  );
}
