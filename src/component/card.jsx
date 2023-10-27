export  const Card=({data:e ,setDataPopup})=>{

    return <div key={e.id} className="card-list">
            <div className="card-list-img">
              <img src={e.img}/>
            </div>  
            <div className="card-list-name">
              {e.name}
            </div>
            <div className="card-list-rating">
              <span className={`fa fa-star ${e.rating>=1&&'checked'}`}></span>
              <span className={`fa fa-star ${e.rating>=2&&'checked'}`}></span>
              <span className={`fa fa-star ${e.rating>=3&&'checked'}`}></span>
              <span className={`fa fa-star ${e.rating>=4&&'checked'}`}></span>
              <span className={`fa fa-star ${e.rating>=5&&'checked'}`}></span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="card-list-categories">{e.categories} - ${e.price} </div>
              <div className="card-list-open">{e.open ? 'Open Now':"Closed"}</div>
            </div>

            <div onClick={()=>setDataPopup(e)} className="learn-more">LEARN MORE</div>
          </div>
}