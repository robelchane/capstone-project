"use client"; // To use hooks in a Next.js page
import { useState } from "react";
import { Input } from "/@/components/ui/input";
import { Textarea } from "/@/components/ui/textarea";
import { Button } from "/components/ui/button";

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
    <main className="my-16 px-10 grid grid-cols-subgrid">
      <div className="py-8 px-4 m-10">
        <h1 className="text-2xl font-bold mb-4">List Your Property</h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Property Name"
            value={propertyData.name}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="price"
            type="text"
            placeholder="Price"
            value={propertyData.price}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="bedrooms"
            type="number"
            placeholder="Bedrooms"
            value={propertyData.bedrooms}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="bathrooms"
            type="number"
            placeholder="Bathrooms"
            value={propertyData.bathrooms}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="address"
            type="text"
            placeholder="Address"
            value={propertyData.address}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="sellerName"
            type="text"
            placeholder="Your Name"
            value={propertyData.sellerName}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="sellerEmail"
            type="email"
            placeholder="Your Email"
            value={propertyData.sellerEmail}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Textarea
            name="detail"
            placeholder="Property Details"
            value={propertyData.detail}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Textarea
            name="summary"
            placeholder="Property Summary"
            value={propertyData.summary}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Input
            name="image"
            type="text"
            placeholder="Image File Name (e.g., image1.jpg)"
            value={propertyData.image}
            onChange={handleChange}
            required
            className="mb-4 w-full"
          />
          <Button type="submit" className="w-full">
            {loading ? "Listing..." : "List Property"}
          </Button>
        </form>
      </div>
    </main>
  );
}
