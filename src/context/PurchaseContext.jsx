import React, { useState } from 'react';
import { db } from '../backend/firebaseConfig';

import { collection, addDoc } from 'firebase/firestore';

import UseUser from '../backend/hooks/UseUser';

export const PurchaseContext = React.createContext();

export const PurchaseProvider = ({ children }) => {
    const [purchaseName, setPurchaseName] = useState("");
    const [purchaseAddress, setPurchaseAddress] = useState("");
    const [purchasePhone, setPurchasePhone] = useState("");
    const [purchaseProducts, setPurchaseProducts] = useState([]);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const {user} = UseUser();

    const submitPurchase = async () => {
        const purchase = {
          uid : user.uid,
          name: purchaseName,
          address: purchaseAddress,
          phone: purchasePhone,
          products: purchaseProducts,
          price: purchasePrice,
        };
      
        try {
          await addDoc(collection(db, "purchases"), purchase);
          console.log('Purchase submitted successfully');
          setPurchasePrice(0);
        } catch (error) {
          console.error('Error submitting purchase: ', error);
        }
      };
  
    return (
      <PurchaseContext.Provider value={[purchaseName, setPurchaseName, purchaseAddress, setPurchaseAddress, purchasePhone, setPurchasePhone, purchaseProducts, setPurchaseProducts, purchasePrice, setPurchasePrice, submitPurchase]}>
        {children}
      </PurchaseContext.Provider>
    );
  };
