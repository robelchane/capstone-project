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
    <div className="py-8 px-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Edit Property</h2>
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
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
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
          <label htmlFor="price" className="block text-sm font-medium">Price</label>
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
          <label htmlFor="summary" className="block text-sm font-medium">Summary</label>
          <textarea
            id="summary"
            name="summary"
            defaultValue={property.summary}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium">Address</label>
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
          <label htmlFor="image" className="block text-sm font-medium">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
