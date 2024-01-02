import { useState } from "react";
import { useSelector } from "react-redux";

const InvoiceForm = () => {
  const clients = useSelector((state) => state.clients);
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { item: "", rate: 0, quantity: 0, amount: 0 }]);
  };

  return (
    <div>
      <h2>Generate Invoice</h2>
      <form>
        <label>
          Client:
          <select>
            {clients.map((client) => {
              return (
                <option key={client} value={client}>
                  {client.fullName}
                </option>
              );
            })}
          </select>
        </label>
        <div className="flex justify-between">
          <p>Item</p>
          <p>Rate ($)</p>
          <p>Qty/hrs</p>
          <p>Amount</p>
        </div>
        <ul className="w-[80%]">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <input className="border w-15%" type="text" value={item.item} />
              <input className="border w-15%" type="number" value={item.rate} />
              <input
                className="border w-15%"
                type="number"
                value={item.quantity}
              />
              <p>{item.amount}</p>
            </li>
          ))}
        </ul>
        <button className="absolute end-0" onClick={addItem}>
          Add item
        </button>
        <hr className="bg-red-800 mt-96" />
        <div className="flex justify-between">
          <p>Total</p>
          <p>0.00</p>
        </div>
        <div className="flex justify-center">
          <button>Done</button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
