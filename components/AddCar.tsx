import React, { useState } from "react";
import NavyBar from "./NavyBar";
import '../css/addcar.css'
import axios from "axios";

export default function () {
    const [model,setModel] = useState("");
    const [brand,setBrand] = useState("");
  const [year,setYear] = useState("");
  const [price,setPrice] = useState("");
  const [imageurl,setImageurl] = useState("");

const getModel=(e:any) => {
    setModel(e.target.value);
}
const getBrand=(e:any) => {
    setBrand(e.target.value);
}

const getYear=(e:any) => {
    setYear(e.target.value);
}
const getPrice=(e:any) => {
    setPrice(e.target.value);
}
const getImageurl=(e:any) => {
    setImageurl(e.target.value);
};
const saveCar =(e:FormDataEvent) => {
    e.preventDefault();
    console.log("model---->" + model);
    console.log("brand---->" + brand);
    console.log("year---->" + year);
    console.log("price---->" + price);
    console.log("imageurl---->" + imageurl);

    const carJson = { brand, model, year, price, imageurl };
axios.post("http://localhost:8080/arun-show-room/car/add", carJson)
.then((res) => {
    console.log("res from spring boot--->" + res.data);
});
}

 return (
    <div className="carcolor">
      <NavyBar />
      <form onSubmit={saveCar} className="carmar">
        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter brand name"
          />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            onSubmit={getModel}
            className="form-control"
            placeholder="Enter Model"
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Year"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group">
          <label>Img URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Img URL"
          />
        </div>




        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}