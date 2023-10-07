
import { Button } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { BsFillTrash3Fill } from "react-icons/bs";
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ReactNode } from 'react';

type CartItemProps = {
    id:number   
    quantity:number
} 

export default function CartItem({id,quantity}:CartItemProps):ReactNode {
    const { removeFromCart }= useShoppingCart()
    const item = storeItems.find(storeItem=>storeItem.id === id)
  return (
    <div className='d-flex align-items-center'>
        <img src={item?.imgUrl} className='object-fit-cover' width={150} height={75}/>
        <div className='d-flex flex-column me-auto'>
            <span className='ms-2 text-secondary fw-bold'>{item?.name}
                <span className='fw-normal ms-1'>{quantity > 1 ? `(x${quantity})` :''}</span>
            </span>
            <span className='text-muted ms-2'>${item?.price}</span>
        </div>
        <Button variant='outline-danger' size='sm' onClick={()=> removeFromCart(id)}><BsFillTrash3Fill/></Button>
    </div>
  )
}
