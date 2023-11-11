import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import ItemList from "./Component/ItemList";
import itemList from "./Sever/DataItem";
import FooterCart from "./Component/FooterCart";
import { useState } from "react";

function App() {
  const [dataItem, setDataItem] = useState(itemList);

  return (
    <div className="App">
      <NavBar />
      <hr/>
      <ItemList dataItem={dataItem} />


      <section className="cart-">
        <header>
          <h2>Your Bag</h2>
        </header>
        
        <FooterCart/>
      </section>
    </div>
  );
}

export default App;
