import React from 'react'

function ProductBill({ subTotal, savings, totalAmount }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <span>Sub Total</span>
                <span>£ {subTotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-row justify-between">
                <span>Savings</span>
                <span>£ {savings.toFixed(2)}</span>
            </div>
            <div className="flex flex-row justify-between">
                <span>Total Amount</span>
                <span>£ {totalAmount.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ProductBill
