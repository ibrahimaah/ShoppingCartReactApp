import { Button, Card } from "react-bootstrap"
import QuantityControl from "./QuantityControl"
import { useShoppingCart } from "../context/ShoppingCartContext"


export type StoreItemProps = {
    id:number 
    name:string
    price:number 
    imgUrl:string
}

export default function StoreItem({id,name,price,imgUrl}:StoreItemProps) {
  
  const { getItemQuantity,increaseCartQuantity } = useShoppingCart()
  
  let quantity = getItemQuantity(id)
  return (
    <Card className='h-100'>
      <Card.Img 
        src={imgUrl} 
        variant="top" 
        height="200px" 
        className="object-fit-cover mb-1"/>

      <Card.Body className='d-flex flex-column'>

        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>

        <div>
          {
            quantity === 0 ? (
              <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>+ Add To Cart</Button>
            ) : <QuantityControl item_id={id} quantity={quantity}/>
          }
        </div>
      </Card.Body>
    </Card>
  )
}
