import { useState } from "react"
import "./App.css"
import { Popup } from "./component/popup"
import { Card } from "./component/card"
import UseApi from "./api"
import Filter from "./component/filter"



function App() {

  const [dataPopup,setDataPopup]=useState('')
  const [openStatus,setOpenStatus]=useState(false)
  const [price,setPrice]=useState('')
  const {data,loading}=UseApi()
  const clearFilter=()=>{
      setOpenStatus(false)
      setPrice('')
  }


  return (
    <div>

      <Filter openStatus={openStatus} setOpenStatus={setOpenStatus} setPrice={setPrice} price={price} clearFilter={clearFilter} />

      <div className="flex justify-around items-center flex-wrap">
        {data?.restaurant?.map(e=>{
            if(openStatus){
                if(e.open==openStatus&&price){
                  if(String(e.price).includes(price)){
                    return <Card data={e} setDataPopup={setDataPopup}/>
                  }
                }else if(e.open==openStatus){
                  return <Card data={e} setDataPopup={setDataPopup}/>
                }
            }else{
              if(price){
                if(String(e.price).includes(price)){
                return <Card data={e} setDataPopup={setDataPopup}/>
                }
              }else{
                return <Card data={e} setDataPopup={setDataPopup}/>
              }
              }
        })}
         {loading&&<svg style={{color:"#737AA4",marginTop:"50px"}} xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>}
      </div>

        <Popup dataPopup={dataPopup} setDataPopup={setDataPopup}/>

    </div>
  )
}

export default App
