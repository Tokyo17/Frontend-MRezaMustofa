export const Card = ({ data: e, setDataPopup }) => {
  return (
    <div key={e.id} className=" bg-white shadow-lg rounded-lg p-4 m-6 relative w-52 ">
      <div>
        <img src={e.img} alt={e.name} className="w-full h-32 object-cover rounded-t-lg"/>
      </div>
      <div className="mt-2 capitalize font-semibold">
        {e.name}
      </div>
      <div className=" flex my-1">
        <span className={`fa fa-star ${e.rating >= 1 && 'text-orange-400'}`}></span>
        <span className={`fa fa-star ${e.rating >= 2 && 'text-orange-400'}`}></span>
        <span className={`fa fa-star ${e.rating >= 3 && 'text-orange-400'}`}></span>
        <span className={`fa fa-star ${e.rating >= 4 && 'text-orange-400'}`}></span>
        <span className={`fa fa-star ${e.rating >= 5 && 'text-orange-400'}`}></span>
      </div>
      <div className="flex justify-between items-center my-1">
        <div className="capitalize ">{e.categories} - ${e.price}</div>
        <div className={`text-xs ${e.open ? 'text-green-500' : 'text-red-500'}`}>
          {e.open ? 'Open Now' : 'Closed'}
        </div>
      </div>
      <div
        onClick={() => setDataPopup(e)}
        className="cursor-pointer mt-3 rounded-md  bottom-0 w-full bg-blue-800 text-white flex justify-center items-center h-8 text-xs"
      >
        LEARN MORE
      </div>
    </div>
  );
};
