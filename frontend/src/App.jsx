import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    if (query !== "") {
      axios
        .get(`http://localhost:4000/cards?q=${query}`)
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cards`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Navbar
        handleChange={handleChange}
        query={query}
        handleClick={handleClick}
      />
      <Cards query={query} data={data} />
      <Footer />
    </>
  );
}

export default App;
