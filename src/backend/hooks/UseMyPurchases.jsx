import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';
import UseUser from '../hooks/UseUser.jsx';

const UseMyPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = UseUser();

  useEffect(() => {
    const fetchPurchases = async () => {
      if (user) {
        try {
          const q = query(collection(db, 'purchases'), where('uid', '==', user.uid));
          const querySnapshot = await getDocs(q);
          const purchasesList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setPurchases(purchasesList);
        } catch (error) {
          console.error('Erro ao recuperar os compras:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPurchases();
  }, [user]);

  return { purchases, loading };
};

export default UseMyPurchases;
