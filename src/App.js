import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  let [imgages , setImages] = useState([])
 
  useEffect( () => {
    getPhotos()
  }, [])
  const getPhotos = () => {
    var data = JSON.stringify({
      father_name: "Shiv Charan Das Agarwal",
      current_address: "DB-45/F DB-BLOCK HARI NAGAR",
      current_pincode: "110064",
      current_state: "DELHI",
      current_city: "NEW DELHI",
      is_current_address_same: true,
      address_houseNumber: "1",
      address_street: "2",
      address_landmark: "3",
      address_subdistrict: "4",
      address_district: "5",
      address_vtcName: "6",
      address_location: "7",
      address_postOffice: "8",
      address_state: "9",
      address_country: "10",
      address_pincode: "11",
      premise_status: "1",
      educational_qualification: "1",
      marital_status: "1",
      gender: "M",
    });

    var config = {
      method: "get",
      url: "https://api.unsplash.com/photos?client_id=gblNJygfqF7yxHGmv8wW1tr1aeTXGNjRBNlqc68fcxQ",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer {{token}}",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setImages(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex-container">
      {
        imgages.length > 0 && imgages.map( it => {
          console.log(it.urls?.full)
          return <div class="img"> 
              <img  src={it.urls?.full} alt="Girl in a jacket" ></img>
          </div>
        })
      }
    </div>
  );
}

export default App;
