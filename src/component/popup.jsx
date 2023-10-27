export const Popup=({dataPopup,setDataPopup})=>{


    const closePopupHandler=()=>{
        setDataPopup('')
    }

    return dataPopup&&<div className="popup ">

            <div className="popup-header">
                <div className="popup-name">
                     {dataPopup.name}
                </div>
                
                <div className="popup-rating">
                    (
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    )
                </div>
                <div className="close-popup">
                    <h3 onClick={closePopupHandler}>X</h3>
                </div>
            </div>
    <div className="popup-main">
        <div className="popup-left-side">
            <div className="popup-img">
                <img src={dataPopup.img}/>
            </div>
 
            <div className="popup-categories">
                {dataPopup.categories} - ${dataPopup.price}
            </div>
            <div className="popup-text">
            Restoran Jepang yang kami tawarkan adalah tempat yang menyuguhkan pengalaman kuliner autentik dari Jepang, menggabungkan cita rasa yang lezat dengan atmosfer yang tenang dan indah. Dengan dekorasi yang dipenuhi elemen-elemen Jepang yang elegan.
            </div>
        </div>
        <div className="popup-right-side">
            <div className="popup-maps">

            {/* https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64844792.46552299!2d38.90980340000002!3d-7.262220399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f95e09ff5ded%3A0xc04881c8a397ffa1!2sHacienda!5e0!3m2!1sid!2sid!4v1698363725837!5m2!1sid!2sid*/}
           
            {/*https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13128.86470513283!2d133.86346523610024!3d34.64924311323665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554075c7287c595%3A0x26a9747a39071a1a!2sRestore%20Cafe%20Ariadne!5e0!3m2!1sid!2sid!4v1698363389417!5m2!1sid!2sid */}
            {/* https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27825693.20294153!2d115.74571564347492!3d31.64230800612441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJepang!5e0!3m2!1sid!2sid!4v1698363147628!5m2!1sid!2sid */}
                <iframe
                src={dataPopup.maps}
                width="380"
                height="390"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                ></iframe>
            </div>
        </div>

    </div>
    </div>
}