import React from "react";

function Orderr({ id, amount, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center p-5  text-sm">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>
        <div>
          <p className="text-sm font-bold">TOTAL</p>
          <p>{amount}</p>
          <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right ">
            {items.length} items
          </p>
          <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
            ORDER #{id}
          </p>
        </div>
      </div>
      <div className="p-5 sm:p-10 ">
        {/* <div>
          {images.map}
        </div> */}
      </div>
    </div>
  );
}

export default Orderr;
