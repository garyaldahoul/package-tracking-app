import React from "react";
import Order from "./Order";


const  Orders =({orders})=>{
    return(
        <>
        <h1>Orders</h1>
        <div className="orders-container">
        {orders.map((order,index)=>
        <Order key={index} order={order}/>
        
        )}
        </div>
        
        </>
    )
}

export default Orders;