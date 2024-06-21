import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const UsePurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'purchases'));
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
    };

    fetchPurchases();
  }, []);

  return { purchases, loading };
};

export default UsePurchases;
