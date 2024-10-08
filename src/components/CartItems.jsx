import React, { useState } from 'react';
import { SWIGGY_BASE_IMG_LINK } from '../utils/constants';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = Math.max(1, e.target.value); // Ensure quantity is at least 1
        setQuantity(newQuantity);
        updateQuantity(item.id, newQuantity);
    };

    return (
        <div className="cart-item flex items-center justify-between py-4 border-b border-gray-200">
            {/* Left Section: Item Information */}
            <div className="flex items-center">
                <div className="cart-item-image w-20 h-20 rounded-lg overflow-hidden mr-4">
                    <img src={`${SWIGGY_BASE_IMG_LINK}/${item.imageId}`} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.category}</p>
                    <p className="text-sm text-green-600 font-bold">
                        ₹{(item.price / 100).toFixed(2)} x {quantity}
                    </p>
                </div>
            </div>

            {/* Right Section: Quantity and Total */}
            <div className="flex items-center space-x-4">
                {/* Quantity Selector */}
                <div className="flex items-center">
                    <button
                        className="px-2 py-1 bg-gray-300 rounded-l-lg hover:bg-gray-400"
                        onClick={() => handleQuantityChange({ target: { value: quantity - 1 } })}
                        disabled={quantity === 1}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        className="w-12 text-center border-gray-300"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                    />
                    <button
                        className="px-2 py-1 bg-gray-300 rounded-r-lg hover:bg-gray-400"
                        onClick={() => handleQuantityChange({ target: { value: quantity + 1 } })}
                    >
                        +
                    </button>
                </div>

                {/* Total Price */}
                <p className="text-lg font-bold">₹{((item.price * quantity) / 100).toFixed(2)}</p>

                {/* Remove Item */}
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.id)}
                >
                    <i className="ri-delete-bin-line"></i>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
