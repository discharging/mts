export default function CarouselCard({ name, img }) {
  return (
    <div className="max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow mr-1 relative overflow-hidden group ">
      <div key={1} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-110"
          />
        </div>
        <div className="text-center mt-2">
          <a href="..">
            <h5 className=" text-lg font-bold tracking-tight text-gray-900 m-0 p-0">
              {name}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
