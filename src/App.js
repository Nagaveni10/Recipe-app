import { useState } from "react";
import "./styles.css";
import { Receipes } from "./Receipe.js";
import { PrimarySearchAppBar } from "./Search.js";

export default function App() {
  const [searchReceipe, setSearch] = useState("");
  return (
    <div className="App">
      <div className="header">
        <PrimarySearchAppBar
          searchReceipe={searchReceipe}
          setSearch={setSearch}
        />
      </div>
      <h1 className="mb-4">Yummy Dishes</h1>
      <br />

      <div className="container">
        <Receipes searchReceipe={searchReceipe} setSearch={setSearch} />
      </div>
    </div>
  );
}

{
  /* function Search() {} */
}
