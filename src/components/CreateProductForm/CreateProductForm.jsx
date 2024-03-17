import './CreateProductForm.css'
import Button from '../Button/Button'
import { useState } from 'react'



export default function CreateProductForm({ setRecipe, style }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const createRecipe = (e) => {
    e.preventDefault()


    console.log('clicked to set new recipe')
    setRecipe((prev) => { console.log(prev) })


  }

  return (
    <form className="" style={style}>
      <input
        type="text"
        placeholder='itemName'
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}

      />

      <input
        type="text"
        placeholder='description'
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}

      />

      <input
        type="text"
        placeholder='image'
        onChange={(e) => {
          setImage(e.target.value)
        }}
        value={image}

      />

      <Button style={"btn"} click={(e) => { createRecipe(e) }}>create product</Button>
    </form>
  )
}