import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handledItems(item) {
    setItems((items) => [...items, item]);
  }
  function handledDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm("are you sure want to delete");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handledItems} />
      <PackingList
        items={items}
        onDelete={handledDeleteItem}
        onToggle={handleToggleItem}
        onClearlist={handleClearList}
      />
      <Stats item={items} />
    </div>
  );
}
