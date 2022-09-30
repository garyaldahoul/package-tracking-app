import React,{} from "react";


const Order =({order})=>{

    const formatDT =(date) =>{
        let newDate= new Date(date);
    let dateMDY = `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`;
    let timeHM =`${newDate.getHours()}:${newDate.getMinutes()}`;
    return `${timeHM}   ${dateMDY}  `;
    } 
return(
    <>
    <div className="order-container">
            <p><span>Status : </span>{order.status}</p>
            <p><span>Time & Date : </span>{formatDT(order.eta)}</p>
            <p><span>Last Update : </span> {formatDT(order.last_updated)}</p>
            <p><span>User Name : </span>{order.user_name}</p>
            <p><span>User Phoen: </span>{order.user_phone}</p>
            <p><span className="notes">{(order.notes != null) && `Notes : ${order.notes}`}</span></p>
        </div>
    </>
)
}

export default Order;