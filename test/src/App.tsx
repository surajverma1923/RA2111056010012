import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url =
    "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url,{headers: {Authorization: 'Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU1NTU4LCJpYXQiOjE3MTIxNTUyNTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImIxZTdmMGNiLWQ3YzktNDFlMi1iMGJiLWU5YTNjOWY5N2NkYyIsInN1YiI6InNhMjI2NkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJiMWU3ZjBjYi1kN2M5LTQxZTItYjBiYi1lOWEzYzlmOTdjZGMiLCJjbGllbnRTZWNyZXQiOiJKZWpLc3praEJiWlpIbWhhIiwib3duZXJOYW1lIjoiU3VyYWogVmVybWEiLCJvd25lckVtYWlsIjoic2EyMjY2QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwNTYwMTAwMTIifQ.OZwQZElUEolI4KBImqZPFoWLg-kdgIyhyC-So3nIry4}'}).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: "white" }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
