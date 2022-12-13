import React, { useState } from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutItem from "./components/CheckoutItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    let id = 1;
    
    if(items.length > 0) {
      id = items[0].id + 1
    }
    let item = {id: id, text: text, returned: false}
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    let newItems = [item, ...items]
    setItems(newItems)
  };

  const removeItem = (id) => {
    let updatedItems = [...items].filter((rmvitem) => rmvitem.id !== id);
    setItems(updatedItems);
  };

  const returnItem = (id) => {
    let updatedItems = items.map((rtitem) => {
      if(rtitem.id === id) {
        rtitem.returned = !rtitem.returned
      }
      return rtitem
    })
    setItems(updatedItems)
  }

  let sortedItems = items.sort((a, b) => b.important - a.important)
  return (
    <>
    <div className="checkout-app">
      <h1>Checkout List</h1>
      <CheckoutForm addItem={addItem} />
      <hr className="seperator"/>
      {sortedItems.map((sitem) => {
        return (
          <CheckoutItem removeItem={removeItem} returnItem={returnItem} item={sitem} key={sitem.id}/>
        )
      })}
    </div><div className="calc1">{items.filter(citem => !citem.returned).length} item checked out</div>
    </>
  );
}

export default App;
