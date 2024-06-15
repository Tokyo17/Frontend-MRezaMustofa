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
  const {data}=UseApi()
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
      </div>

        <Popup dataPopup={dataPopup} setDataPopup={setDataPopup}/>

    </div>
  )
}

export default App
