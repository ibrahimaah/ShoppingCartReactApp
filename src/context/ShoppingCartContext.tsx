import { ReactNode, createContext ,useContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart"
import { StoreItemProps } from "../components/StoreItem"
import storeItems from '../data/items.json'

type ShoppingCartProviderProps = {
    children : ReactNode
}

export type CartItemType = {
    id:number   
    quantity:number
} 


type ShoppingCartContextType = {
    getItemQuantity : (id:number) => number 
    increaseCartQuantity : (id:number) => void
    decreaseCartQuantity : (id:number) => void
    removeFromCart : (id:number) => void
    cartQuantity : number
    cartItems : CartItemType[]
    toggleCartState:()=>void
    getItemById : (item_id:number)=> StoreItemProps | undefined
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
} 



export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
    const [cartItems,setCartItems] = useState<CartItemType[]>([])
    const [cartState,setCartState] = useState(false) //i.e false => cart is closed
    //The red circle value above the cart
    const cartQuantity = cartItems.reduce(((quantity,item)=> item.quantity + quantity),0)

    const toggleCartState = () => {
        setCartState(!cartState)
    }
    function getItemQuantity(id:number) {
        return cartItems.find(cartItem => cartItem?.id === id)?.quantity || 0
    }


    function isItemExistInCart(id:number) : boolean {
        let item = cartItems.find(cartItem => cartItem?.id === id)
        if (item === undefined) {
            return false
        }
        return true
    }

   

    function increaseCartQuantity(id:number)
    {
       
        setCartItems( currentCartItems => {

        if (isItemExistInCart(id)) 
        {
            return currentCartItems.map(cartItem => {
                if (cartItem.id === id) 
                {
                    return { ...cartItem , quantity : cartItem.quantity + 1}
                }
                else
                {
                    return cartItem
                }
            }) 
        }
        else 
        {
            return [...currentCartItems ,{id,quantity:1}]
        }
        })    
    }


    function decreaseCartQuantity(id:number){
        
        setCartItems(currentCartItems => {
            if (getItemQuantity(id) === 0) {
                    return currentCartItems.filter(cartItem => cartItem.id !== id)
            }else{
                return currentCartItems.map(cartItem => {
                    if (cartItem.id === id) {
                        return { ...cartItem , quantity : cartItem.quantity - 1}
                    }else{
                        return cartItem
                    }
                }) 
            }
        })
           
    }

    function removeFromCart(id:number){
        setCartItems(currentCartItems => {
            return currentCartItems.filter(cartItem => cartItem.id !== id)
        })
    }

    function getItemById(item_id:number) {
        return storeItems.find(storeItem => storeItem.id === item_id)
    }

    return (
        <ShoppingCartContext.Provider 
            value={{getItemQuantity,
                    increaseCartQuantity,
                    decreaseCartQuantity,
                    removeFromCart,
                    cartQuantity,
                    cartItems,
                    toggleCartState,
                    getItemById}}
        >
            {children}
            <ShoppingCart cartState={cartState}/>
        </ShoppingCartContext.Provider>
    )
}   