import { Offcanvas, Stack } from "react-bootstrap";
import { CartItemType, useShoppingCart } from "../context/ShoppingCartContext";

import CartItem from "./CartItem";

type ShoppingCartProps = {
    cartState : boolean
}
export default function ShoppingCart({cartState}:ShoppingCartProps) {
    const {toggleCartState,cartQuantity,cartItems,getItemById} = useShoppingCart()

    let total_price = cartItems.reduce((total:number,cartItem:CartItemType):number =>
    {
        let cartItemPrice = getItemById(cartItem.id)?.price

        if(cartItemPrice !== undefined)
        {
            return (cartItem.quantity * cartItemPrice) + total
        }
        else{
            return 0
        }
        
    },0)

  return (
    <Offcanvas show={cartState} onHide={toggleCartState} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {
                cartQuantity === 0 && <p className="fw-bold fs-2 text-secondary text-center">Cart is Empty !!</p>
            }
            <Stack gap={3}>
                {
                    cartItems.map(cartItem => {
                        return (
                            <CartItem key={cartItem.id} {...cartItem}/>
                        )
                    })
                }
            </Stack>

            {
                cartQuantity > 0 && 
                (<div className="mt-4 display-5">
                    <span>Total: {total_price}</span>
                </div>)
            }
        </Offcanvas.Body>
    </Offcanvas>
  )
}
