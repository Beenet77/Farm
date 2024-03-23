import axios from "axios";
import React, { useEffect, useState } from "react";
import { FARM_URL } from "../../../apis/Api";
// import storage from "../../../storage";
// import { jwtDecode } from "jwt-decode";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async (catid) => {
    try {
      const response = await axios.get(FARM_URL.orders);
      // if (catid) {
      //   setOrders(response.data.filter((el) => el.category === catid));
      // } else {
      //   const token = storage.getToken();

      //   const decoded = jwtDecode(token);
      //   let item = response.data.filter(
      //     (el) => el.created_by === decoded.user_id
      //   );
      setOrders(response.data);
      // }
      console.log(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // async function getproductdetail(id) {
  //   let myurl = "http://127.0.0.1:8000/api/marketplaceproducts/" + id + "/";
  //   try {
  //     let res = await axios.get(myurl);
  //     return res.data; // Return the response data directly
  //   } catch (error) {
  //     console.error("Error fetching product detail:", error);
  //     throw error; // Re-throw the error to be handled by the caller
  //   }
  // }

  useEffect(() => {
    fetchOrder();
  }, []);

  //   {
  //     "id": 1,
  //     "uuid": "742f7ab6-32ad-4599-9f83-4013563a9e7d",
  //     "quantity": 2,
  //     "total_price": "240.00",
  //     "status": "Pending",
  //     "created_at": "2024-03-22T18:23:19.796416Z",
  //     "delivary_address": null,
  //     "user": 3,
  //     "product": 1
  // },
  return (
    <ul className="bg-white px-10 py-3 my-5 container mx-auto text-blue-gray-900 rounded-lg">
      {orders.map((item) => {
        // let details = ;
        // console.log("details", getproductdetail(item.id));
        return (
          <li key={item.id}>
            <p className="text-gray-600 ">Product Id : {item.product}</p>

            <p className="text-gray-600 ">Quantity : {item.quantity}</p>
            <p className="text-gray-600">Total parice : {item.total_price}</p>
            <p className="text-gray-600">Status : {item.status}</p>
            <p className="text-gray-600">
              Location : {item.delivery_loacation}
            </p>

            <hr />
          </li>
        );
      })}
    </ul>
  );
};
