import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItems';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems)

    const EmptyCart = () => {
        return (
            <div className='text-center text-4xl font-bold text-slate-700 my-12'>Your cart is empty</div>
        )
    }

    const showCartList = () => {
        return (
            cartItems.map((cartItem, i) => {
                return (                    
                        <CartItem key={i} item={cartItem} updateQuantity={2} removeItem={0} />
                )
            })
        )
    }    

    const calculateTotalPrice = () => { 
        // return cartItems.reduce((total, item) => total + (item.price / 100 * item.quantity)).toFixed(2);
        return 1000;
    }

    const OrderSummary = () => {
        return (
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                {cartItems.length > 0 ? (
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between mt-4 pt-4 border-t border-gray-300">
                            <h3 className="text-lg font-semibold">Total</h3>
                            <span className="text-lg font-bold">Rs {calculateTotalPrice()}</span>
                        </div>
                        <button className="w-full mt-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Proceed to Checkout</button>
                    </div>
                ) : null}
            </div>
        );
    }

    return (
        <>
            <h1 className='' >Cart Page</h1>
            <div className='flex justify-center gap-12'>
                <div className='min-w-[50vw]'>
                    {(cartItems.length == 0) ? EmptyCart() : showCartList()}
                </div>
                <div>
                    <h1>Order Summary</h1>
                    {/* <OrderSummary items={cartItems} totalPrice={1000} /> */}
                    <OrderSummary />
                </div>
            </div>
        </>
    )
}

export default Cart