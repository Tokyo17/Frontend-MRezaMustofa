import { useEffect, useState } from "react"
import "./App.css"
import { gql, useLazyQuery } from "@apollo/client"
import { Popup } from "./component/popup"
import { Card } from "./component/card"



const GetData=gql`query MyQuery( $_regex: String = "") {
  restaurant(order_by: {id: asc}, where: {categories: {_regex: $_regex}}) {
    name
    id
    categories
    price
    rating
    open
    img
    maps
  }
}
`


function App() {

  const [data,setData]=useState([])
  const [dataPopup,setDataPopup]=useState('')
  const [openStatus,setOpenStatus]=useState(false)
  const [price,setPrice]=useState('')
  const [categories,setCategories]=useState('')


  const [getDog, { loading, error, data:dataAll }] = useLazyQuery(GetData,{

    onCompleted:()=>{
      setData(dataAll)
  },
    fetchPolicy: "network-only",   // Used for first execution
    nextFetchPolicy: "cache-and-network" // Doesn't check cache before making a network request
  });


  useEffect(()=>{
    getDog({
      variables:{
       _regex:categories 
      }
    })
  },[categories])


  const clearFilter=()=>{
      setCategories('')
      setOpenStatus(false)
      setPrice('')
  }

  return (
    <div>
      <div className="title">
       Restaurant {loading&& 'Loading'}
      </div>
      <div className="descrip">
          Kami menyediakan beberapa macam restaurant yang dapat anda pilih sebagai refrensi sesuai dengan yang anda inginkan.
      </div>

      <div className="filter">

        <div className="filter-input">
          <span>Filter By : </span>
          <input checked={openStatus} onChange={(e)=>{setOpenStatus(e.target.checked)}} id="status" type="checkbox"/>
          <label htmlFor="status">Open Now</label>
          <input onChange={e=>setPrice(e.target.value)} value={price} placeholder="Price" type="number"/>
          <input onChange={e=>setCategories(e.target.value)} value={categories} placeholder="Categories" type="text"/>
        </div>

        <div onClick={clearFilter} className="clear-filter">
          CLEAR ALL
        </div>
        
      </div>


      <div className="list">
      {
        data?.restaurant?.map(e=>{

          if(openStatus){
            if(e.open==openStatus){
              if(price){
                if(price==e.price){
                return <Card data={e} setDataPopup={setDataPopup}/>
                }
              }else{
                return <Card data={e} setDataPopup={setDataPopup}/>
              }
              }
          }else if(!openStatus){
            if(price){
              if(price==e.price){
              return <Card data={e} setDataPopup={setDataPopup}/>
              }

            }else{
              return <Card data={e} setDataPopup={setDataPopup}/>
            }
            }
        })
      }
      </div>

        <Popup dataPopup={dataPopup} setDataPopup={setDataPopup}/>

    </div>
  )
}

export default App
