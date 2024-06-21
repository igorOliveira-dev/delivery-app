import React, { useContext } from "react";
import ReturnArrow from "../../components/returnArrow/ReturnArrow";

import * as S from "./deliveryStyle.js";

import UsePurchases from "../../../backend/hooks/UsePurchases";
import Loading from "../../components/loading/Loading";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../backend/firebaseConfig";
import { PurchaseContext } from "../../../context/PurchaseContext.jsx";

const Delivery = () => {
  const { purchases, setPurchases } = UsePurchases();
  const { loading, setLoading } = UsePurchases();
  const { purchasePrice } = useContext(PurchaseContext);

  if (loading) {
    return <Loading />;
  }

  const deletePurchase = async (id) => {
    try {
      if (confirm("Tem certeza que deseja finalizar esse pedido?")) {
        await deleteDoc(doc(db, "purchases", id));
        setPurchases(purchases.filter((purchase) => purchase.id !== id));
      }
    } catch (error) {
      console.error("Error deleting purchase: ", error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <div>
      <ReturnArrow />
      <S.Container>
        {purchases.map((purchase) => (
          <div key={purchase.id}>
            <p style={{ color: "#fdfdfd", fontWeight: "bolder" }}>
              {purchase.name}
            </p>
            <p style={{ color: "#fdfdfd" }}>{purchase.address}</p>
            <p style={{ color: "#fdfdfd" }}>{purchase.phone}</p>
            <hr style={{ marginBlock: "10px" }} />
            <p style={{ color: "#fdfdfd" }}>
              {purchase.products.map((item, index) => (
                <div key={index}>
                  {item.name} ({item.number}) <br />
                </div>
              ))}
            </p>
            <h2 style={{ color: "#fdfdfd", marginBottom: "10px" }}>
              R${purchase.price},00
            </h2>
            <button onClick={() => deletePurchase(purchase.id)}>
              Finalizar pedido
            </button>
          </div>
        ))}
      </S.Container>
    </div>
  );
};

export default Delivery;
