import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { GrReturn } from "react-icons/gr"

export default function CheckoutItem(props) {
    const { item, removeItem, returnItem
    } = props
    return (
        <div className={item.returned ? "item-row return" : "item-row"}>
            {item.text}
            <div className="iconsContainer">
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeItem(item.id)}/>
                <GrReturn onClick={() => returnItem(item.id)}/>
            </div>
        </div>
    )
}
