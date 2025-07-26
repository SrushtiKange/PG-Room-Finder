// PGListing.jsx - Room Finder PG Listing Page with Filters
import { useState } from "react";

const PGListing = () => {
  const [filters, setFilters] = useState({
    location: "",
    rentRange: "",
    gender: "",
    roomType: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const dummyPGs = [
    {
      id: 1,
      name: "Sunrise PG",
      location: "Pune",
      rent: 7000,
      gender: "Female",
      roomType: "Sharing",
      image: "https://source.unsplash.com/300x200/?hostel",
    },
    {
      id: 2,
      name: "GreenView PG",
      location: "Mumbai",
      rent: 10000,
      gender: "Male",
      roomType: "Single",
      image: "https://source.unsplash.com/300x200/?pg-room",
    },
  ];

  const filteredPGs = dummyPGs.filter((pg) => {
    return (
      (!filters.location || pg.location === filters.location) &&
      (!filters.rentRange ||
        (filters.rentRange === "<8000" && pg.rent < 8000) ||
        (filters.rentRange === "8000-10000" && pg.rent >= 8000 && pg.rent <= 10000) ||
        (filters.rentRange === ">10000" && pg.rent > 10000)) &&
      (!filters.gender || pg.gender === filters.gender) &&
      (!filters.roomType || pg.roomType === filters.roomType)
    );
  });

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Find Your PG</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <select name="location" onChange={handleChange} className="p-2 border rounded">
          <option value="">Location</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <select name="rentRange" onChange={handleChange} className="p-2 border rounded">
          <option value="">Rent</option>
          <option value="<8000">Below ₹8000</option>
          <option value="8000-10000">₹8000 - ₹10000</option>
          <option value=">10000">Above ₹10000</option>
        </select>

        <select name="gender" onChange={handleChange} className="p-2 border rounded">
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select name="roomType" onChange={handleChange} className="p-2 border rounded">
          <option value="">Room Type</option>
          <option value="Single">Single</option>
          <option value="Sharing">Sharing</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPGs.map((pg) => (
          <div key={pg.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={pg.image} alt={pg.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{pg.name}</h2>
              <p className="text-gray-600">{pg.location}</p>
              <p className="text-blue-600 font-bold">₹{pg.rent}/month</p>
              <p className="text-sm text-gray-500">{pg.gender} • {pg.roomType}</p>
              <button className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PGListing;
