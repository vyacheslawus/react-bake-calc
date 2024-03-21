import './Product.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

export const Product = ({ item, index }) => {

  const nav = useNavigate()

  return (
    <div key={index} className="card">
      <div id={item.id} className="card-body">

        <img
          style={{

            width: "100%"
          }}
          className="card-img"
          src={item.image || item.image2}
          alt="itemImage"
          width="474"
          height="300" />
        <h2 className="card-name">{item.itemName}</h2>
        <p className="card-description">{item.description}</p>
      </div>

      <Button
        style={"btn-card card-open"}
        click={() => { nav(`/product/${item.id}`) }}
        id={item.id}
        ingredients={item.ingredients}

      >
        открыть карточку <p> <ExternalLink size={25} style={{
          paddingTop: "5px"
        }} /></p>

      </Button>


    </div>
  )
}