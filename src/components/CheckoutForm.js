import React, { useState } from "react";


export default function CheckoutForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addItem(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="margin1">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="checkout-input"
        placeholder="Add an item"
      />
      <button type="submit" className="checkout-button">Add</button>
    </form>
  );
}
