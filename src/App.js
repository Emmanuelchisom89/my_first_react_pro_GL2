//From Local storage
import Header from "./Header";
import FindItem from "./FindItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <FindItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

/* [
  {
    id: 1,
    checked: false,
    item: "sugar",
  },
  {
    id: 2,
    checked: false,
    item: "item 2",
  },
  {
    id: 3,
    checked: false,
    item: "item 3",
  },
];
 */
