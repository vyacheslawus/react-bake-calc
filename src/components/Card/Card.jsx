import "./Card.css"
import Button from "../Button/Button"
import { products } from "../../data"
import { useState } from "react"
import { Product } from "../Product/Product"
import CreateProductForm from "../CreateProductForm/CreateProductForm"
import { CreatePage } from "../CreatePage/CreatePage"



import ProductModal from "../ProductModal/ProductModal"
import { useNavigate } from "react-router-dom"

export default function Card() {


  const nav = useNavigate()


  const [recipe, setRecipe] = useState(products)

  const itemNames = recipe.map(item => item.itemName)




  const searchHandler = (e) => {
    const target = e.target.value;

    console.log(itemNames.includes(target))
    console.log(target)
  }

  return (
    <>

      <button className="btn" onClick={() => { nav('/create-new-recipe'), console.log('rere') }} >create card page</button>

      {/* <CreateProductForm setRecipe={setRecipe} style={{
        display: ""
      }} /> */}

      {/* <Button
        style={"btn"}
        click={() => { handleClick() }}
      >oepn modal</Button> */}


      <input
        type="text"
        style={{
          border: "1px solid black",
          width: "100%",
          padding: "5px",
          lineHeight: "1.5rem",
          borderRadius: "10px",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
        onChange={(e) => { searchHandler(e) }}
      />

      {recipe.map((item, index) => (
        <Product key={item.id} item={item} />
      ))}




    </>
  )
}