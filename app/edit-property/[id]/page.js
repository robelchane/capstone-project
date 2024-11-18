"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams for Next.js 13

export default function EditProperty() {
  const { id } = useParams(); // Get the property ID directly from the URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    // Ask for confirmation before updating
    const isConfirmed = window.confirm("Are you sure you want to update this property?");
    
    if (!isConfirmed) {
      return; // If the user clicks "Cancel", do not submit the form
    }

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
        // Display success prompt using alert
        alert("Property updated successfully!"); // Show a prompt with success message
        setTimeout(() => {
          window.location.href = "/manager"; // Redirect after successful update
        }, 2000); // Wait 2 seconds before redirecting
      } else {
        alert("Failed to update property"); // Show failure prompt
      }
    } catch (err) {
      alert("Error updating property"); // Show error prompt if request fails
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <main className="flex flex-col items-center">
    <div className="py-8 px-4 mt-24 max-w-4xl w-full">
      <h2 className="text-center text-[#001f3f] text-4xl font-serif mb-8">
        Edit Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-base font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={property.name}
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
            required
          />
        </div>                         
        <div>
          <label htmlFor="summary" className="block text-base font-medium">Property Summary</label>
          <textarea
            id="summary"
            name="summary"
            defaultValue={property.summary}
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-base font-medium">Property Type</label>
          <select
            id="propertyType"
            name="propertyType"
            defaultValue={property.propertyType}
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
            required
          >
            <option value="Available">Available</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <div>
          <label htmlFor="parkingSpaces" className="block text-base font-medium">Parking Spaces</label>
          <input
            type="number"
            id="parkingSpaces"
            name="parkingSpaces"
            defaultValue={property.parkingSpaces}
            className="w-full p-2 border bg-white"
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
            className="w-full p-2 border bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-base font-medium">Property Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full p-2 border bg-white"
          />
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-[#001f3f] text-white border border-[#001f3f] hover:bg-transparent hover:text-[#001f3f] transition-colors duration-300 px-5 py-2 mt-10 mb-10"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </main>
  );
}
