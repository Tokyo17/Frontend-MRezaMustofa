export const Popup=({dataPopup,setDataPopup})=>{

    const closePopupHandler=()=>{
        setDataPopup('')
    }

    return dataPopup && (
        <div className="fixed top-1/2 left-1/2 w-80 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white shadow-lg">
            <div className="flex items-center relative">
                <div className="text-xl capitalize font-semibold mb-1">
                    {dataPopup.name}
                </div>
                <div className="ml-2 mb-1">
                    (
                        <span className={`fa fa-star ${dataPopup.rating >= 1 && 'text-orange-400'}`}></span>
                        <span className={`fa fa-star ${dataPopup.rating >= 2 && 'text-orange-400'}`}></span>
                        <span className={`fa fa-star ${dataPopup.rating >= 3 && 'text-orange-400'}`}></span>
                        <span className={`fa fa-star ${dataPopup.rating >= 4 && 'text-orange-400'}`}></span>
                        <span className={`fa fa-star ${dataPopup.rating >= 5 && 'text-orange-400'}`}></span>
                    )
                </div>
                <div className="absolute right-1 cursor-pointer text-red-700 text-lg font-semibold " onClick={closePopupHandler}>
                    <h3>X</h3>
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col items-center">
                    <img src={dataPopup.img} className="w-full"/>
                    <iframe
                        src={dataPopup.maps}
                        width="301"
                        height="180"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        className="mt-2"
                    ></iframe>
                </div>
                <div className="capitalize font-semibold mt-2">
                    {dataPopup.categories} - ${dataPopup.price}
                </div>
                <div className="text-justify mt-2">
                    Restoran Jepang yang kami tawarkan adalah tempat yang menyuguhkan pengalaman kuliner autentik dari Jepang, menggabungkan cita rasa yang lezat dengan atmosfer yang tenang dan indah. Dengan dekorasi yang dipenuhi elemen-elemen Jepang yang elegan.
                </div>
            </div>
        </div>
    );
}
