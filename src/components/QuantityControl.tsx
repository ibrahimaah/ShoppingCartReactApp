import { Button } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
type QuantityControlProps = {
  item_id : number,
  quantity: number
}
export default function QuantityControl({item_id,quantity}:QuantityControlProps) {
  const { increaseCartQuantity,decreaseCartQuantity,removeFromCart } = useShoppingCart()
  return (
    <>
      <div className="d-flex justify-content-center align-items-baseline">
        <Button variant='outline-primary' onClick={()=>decreaseCartQuantity(item_id)}>
          <span><AiOutlineMinus/></span>
        </Button>
        <span className="mx-2 fw-bold fs-5 text-secondary">{quantity} <span className='fw-normal'>in cart</span></span>
        <Button variant='outline-primary' onClick={()=>increaseCartQuantity(item_id)}>
          <span><AiOutlinePlus/></span>
        </Button>
      </div>

      <div className="text-center mt-2">
        <Button variant="outline-danger" onClick={()=>removeFromCart(item_id)}><BsFillTrash3Fill /></Button>
      </div>
    </>
  )
}
