import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../reducers/itemsReducer";

const InvoiceForm = () => {
  const clients = useSelector((state) => state.clients);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [localItems, setLocalItems] = useState([
    {
      index: 0,
      item: "",
      rate: 0,
      quantity: 0,
    },
  ]);

  const [lastIndex, setLastIndex] = useState(0);

  const handleInputChange = (id, value) => {
    const updatedItems = localItems.map((item, index) => {
      if (id === index) {
        return { ...item, ...value };
      } else {
        return item;
      }
    });
    setLocalItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem = {
      index: lastIndex + 1,
      item: "",
      rate: 0,
      quantity: 0,
    };
    setLocalItems([...localItems, newItem]);
    setLastIndex(lastIndex + 1);
  };

  let total = 0;

  localItems.forEach((item) => {
    total += item.rate * item.quantity;
  });

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
          {localItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                }
              }}
            >
              <input
                className="border"
                type="text"
                value={item.item}
                onChange={(event) =>
                  handleInputChange(index, { item: event.target.value })
                }
              />
              <input
                className="border"
                type="number"
                value={item.rate}
                onChange={(event) =>
                  handleInputChange(index, { rate: event.target.value })
                }
              />
              <input
                className="border"
                type="number"
                value={item.quantity}
                onChange={(event) =>
                  handleInputChange(index, { quantity: event.target.value })
                }
              />
              <p>{item.rate * item.quantity}</p>
            </li>
          ))}
        </ul>
        <button
          className="absolute end-0"
          onClick={(event) => {
            event.preventDefault();
            handleAddItem();
          }}
        >
          Add item
        </button>
        {
          <div className="flex flex-col">
          {items.map((item) => {
            console.log(`item: `)
            return (
              <div key={item.index} className="flex justify-between mt-4">
                <p>{item.item}</p>
                <p>{item.rate}</p>
                <p>{item.quantity}</p>
                <p>{item.rate * item.quantity}</p>
              </div>
            );
          })}
        </div>
        }
        <hr className="bg-red-800 mt-96" />
        <div className="flex justify-between">
          <p>Total</p>
          <p>{total}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={(event) => {
              event.preventDefault();
              console.log("we are in!");
              dispatch(addItems(localItems));
              setLocalItems([
                {
                  index: 0,
                  item: "",
                  rate: 0,
                  quantity: 0,
                },
              ]);
              setLastIndex(0);
            }}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
