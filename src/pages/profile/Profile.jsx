import React, { useEffect, useState } from "react";
import { ProfileNav } from "../../components/ProfileNav";
import Modal from "./helpers/Modal";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { MyProducts } from "./helpers/MyProducts";
import { Setting } from "./helpers/Setting";
import { Orders } from "./helpers/Orders";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [catOptions, setCatOptions] = useState([]);
  const [tab, setTab] = useState("YOUR_PRODUCTS");

  function handleOpenModalClick() {
    setShowModal(true);
  }

  const fetchCat = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/product-category/"
      );
      setCatOptions(
        response.data.map((el) => {
          return { value: el.id, label: el.product_name };
        })
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  function draw(value) {
    switch (value) {
      case "YOUR_PRODUCTS":
        return <MyProducts catOptions={catOptions} />;
      case "SETTING":
        return <Setting />;
      case "ORDERS":
        return <Orders />;
      default:
        return <MyProducts />;
    }
  }

  return (
    <div className="min-h-[85vh] container mx-auto mt-4 ">
      <ProfileNav
        setTab={setTab}
        tab={tab}
        handleOpenModalClick={handleOpenModalClick}
      />
      <Modal
        catOptions={catOptions}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      {draw(tab)}
    </div>
  );
};

export default Profile;
