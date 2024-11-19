import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [fromcurrency, setFromcurrency] = useState("India");
  const [tocurrency, setTocurrency] = useState("America");
  const [currency, setCurrency] = useState(0);
  const [convertedcurrency, setConvertedcurrency] = useState(0);

  const handlecurrency = (event) => {
    setCurrency(event.target.value);
  }
  const handlefromcurrency = (event) => {
    setFromcurrency(event.target.value)
  }
  const handletocurrency = (event) => {
    setTocurrency(event.target.value)
  }
  const convertcurrency = (event) => {
    event.preventDefault();
    if (isNaN(currency)) {
      window.alert("Please enter a valid number");
    }
    if (fromcurrency === "India" && tocurrency === "America") {
      setConvertedcurrency(currency * 0.0118488);
    } else if (fromcurrency === "India" && tocurrency === "China") {
      setConvertedcurrency(currency * 0.085773988)
    } else if (fromcurrency === "India" && tocurrency === "Japan") {
      setConvertedcurrency(currency * 1.8249042);
    } else if (fromcurrency == "America" && tocurrency == "India") {
      setConvertedcurrency(currency / 0.0118479);
    } else if (fromcurrency === "America" && tocurrency === "China") {
      setConvertedcurrency(currency * 7.2394187);
    } else if (fromcurrency === "America" && tocurrency === "Japan") {
      setConvertedcurrency(currency * 154.07395);
    } else if (fromcurrency === "China" && tocurrency == "India") {
      setConvertedcurrency(currency * 11.656517)
    } else if (fromcurrency === "China" && tocurrency === "America") {
      setConvertedcurrency(currency * 0.13813264);
    } else if (fromcurrency === "China" && tocurrency === "Japan") {
      setConvertedcurrency(currency * 21.290936);
    } else if (fromcurrency === "Japan" && tocurrency === "India") {
      setConvertedcurrency(currency * 0.54762059);
    } else if (fromcurrency === "Japan" && tocurrency === "America") {
      setConvertedcurrency(currency * 0.006486789);
    } else if (fromcurrency === "Japan" && tocurrency === "China") {
      setConvertedcurrency(currency * 0.046961805);
    } else if (fromcurrency === tocurrency) {
      setConvertedcurrency(currency);
    } else if (isNaN(currency)) {
      window.alert("Please enter a valid number");
    }
  }

  return (
    <div className="App">

      <h1 className='h1'>Currency Exchange Rates</h1>

      <div className='contents'>
        <form onSubmit={convertcurrency}>
          <div className='form-group'>
            <select value={fromcurrency} onChange={handlefromcurrency}>
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
           <FontAwesomeIcon icon={faArrowRightArrowLeft} className='icon'/>
            <select value={tocurrency} onChange={handletocurrency}>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="America">America</option>
              <option value="India">India</option>
            </select>
          </div>  <br />
          <div className='input'>
            <input value={currency} onChange={handlecurrency} />
            <FontAwesomeIcon icon={faArrowRightArrowLeft}  className='icon'/>
            <input type="number" value={convertedcurrency} readOnly />
          </div><br />
          <button id='submit' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
