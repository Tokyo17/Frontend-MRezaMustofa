

const Filter=({openStatus,setOpenStatus,setPrice,price,clearFilter})=>{

    return(
        <>
            <div className="ms-8 mt-5 text-4xl ">
                Restaurant
            </div>
            <div className="ms-8 my-2">
                Kami menyediakan beberapa macam restaurant yang dapat anda pilih sebagai refrensi sesuai dengan yang anda inginkan.
            </div>

            <div className="border-t border-b border-gray-500 h-16 px-8 flex justify-between items-center">
                <div>
                <span>Filter By : </span>
                <input className="ms-5" checked={openStatus} onChange={(e)=>{setOpenStatus(e.target.checked)}} id="status" type="checkbox"/>
                <label htmlFor="status">Open Now</label>
                <input 
                    onChange={e => setPrice(e.target.value)} 
                    value={price} 
                    placeholder="Price" 
                    className="border ms-5 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div onClick={clearFilter} className="cursor-pointer rounded-sm  bottom-0 p-2 bg-red-700 text-white flex justify-center items-center text-xs">
                CLEAR ALL
                </div> 
            </div>
        </>
    )
}

export default Filter