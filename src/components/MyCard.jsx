import lcm from "../assets/productImgs/image1.webp";

import { Link } from "react-router-dom";

export default function MyCard() {
  return (
    <Link to="/products/1">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={lcm}
            alt="..."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="text-center">
          <h3 className="text-sm mt-4 text-gray-700">
            <a href="..">
              <span aria-hidden="true" className="absolute inset-0" />
              Industrial 3D Wood Carving Machine
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">3D Wood Carving Machine</p>
          <p className="mt-1 text-sm text-gray-500">3D Wood Carving Machine</p>
          <p className="mt-1 text-sm text-gray-500">3D Wood Carving Machine</p>
        </div>
      </div>
    </Link>
  );
}
