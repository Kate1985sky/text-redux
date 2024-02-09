import { useState } from "react";

export const FormNewItem = ({ title, price, id }) => {
  const [item, setItem] = useState({});

  const addHendler = () => {};

  return (
    <div className="addCart">
      <form onSubmit={addHendler}>
        <label className="form">
          <input
            className="form-input"
            type="text"
            onChange={(e) => setItem(e.target.value)}
            value={item["title"]}
            name={title}
            placeholder="title"
          />
        </label>
        <label className="form">
          <input
            className="form-input"
            type="text"
            onChange={(e) => setItem(e.target.value)}
            value={item["price"]}
            name={price}
            placeholder="price"
          />
        </label>
      </form>
      <button type="submit" className="submit">
        <span>add cart +</span>
      </button>
    </div>
  );
};
