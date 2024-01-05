import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const properties = [
  {
    id: 1,
    name: "Semi Detached House",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Southfield Road, Oxford OX4",
    price: "$1500",
    description: "Southfield Road, Oxford OX4",
    bed: "3",
    bath: "2",
    type: "Semi-furnished",
    category: "For sale",
  },
  {
    id: 2,
    name: "Fully Furnished Studio Apartment",
    href: "#",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Studio apartment in London.",
    price: "$700",
    description: "London SW1V 6DA",
    bed: "4",
    bath: "2",
    type: "Furnished",
    category: "For Investment",
  },
  {
    id: 3,
    name: "Detached Cottage with Garden",
    href: "/property/detached-cottage-with-garden",
    imageSrc:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "A detached cottage with a large garden.",
    price: "$120 per week",
    description: "Near the village of Hindlip, Worcestershire WR12QZ",
    bed: "4",
    bath: "2",
    type: "Furnished",
    category: "For sale",
  },
  {
    id: 4,
    name: "Penthouse for rent",
    href: "/property/penthouse-for-rent",
    imageSrc:
      "https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "A modern penthouse apartment overlooking the city skyline.",
    price: "$800 per month",
    description: "New York City, USA",
    bed: "5",
    bath: "3",
    type: "Fully furnished",
    category: "For Rent",
  },
];

const categoryColors = {
  "For sale": "bg-blue-500",
  "For Investment": "bg-green-500",
  "For Rent": "bg-yellow-500",
  // Add more categories and colors as needed
};

export default function FeaturedProperties() {
  return (
    <div>
      <div className="mx-auto py-36 sm:py-24 sm:px-24 px-4">
        <h2 className="sm:text-5xl text-3xl font-bold tracking-tight text-gray-900">
          Featured Properties
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative border border-gray-300 rounded-xl shadow-md bg-white pb-4"
            >
              {/* Heart icon in top-right corner */}
              <div className="absolute z-40 top-8 right-5 bg-gray-50 p-2 rounded-full">
                <FaRegHeart />
              </div>

              {/* Category in top-left corner with color dot */}
              <div className="absolute top-8 z-40 flex items-center bg-gray-100 rounded-r-full">
                <span
                  className={`h-3 w-3 rounded-full mx-2 ${
                    categoryColors[property.category]
                  }`}
                />
                <span className="text-gray-900  px-2 py-1  ">
                  {property.category}
                </span>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75 lg:h-80 relative">
                <img
                  src={property.imageSrc}
                  alt={property.imageAlt}
                  className="h-80 w-full object-cover object-center lg:h-full lg:w-full"
                />
                {/* Info icon and white background on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white p-4 rounded-full">
                    <MdArrowOutward className="text-4xl text-gray-900" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col px-5">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    {property.price}
                  </p>
                  <h3 className="text-md font-semibold text-gray-700 mt-3">
                    <a href={property.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {property.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {property.description}
                  </p>
                </div>
                <div className="mt-5">
                  <div className="bg-gray-900 p-4 rounded-xl flex justify-between">
                    <span className="text-white flex items-center gap-x-2">
                      <FaBed />
                      {property.bed}
                    </span>
                    <span className="text-white flex items-center gap-x-2">
                      <GiBathtub />
                      {property.bath}
                    </span>
                    <span className="text-white flex items-center gap-x-2">
                      <GiSofa />
                      {property.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
