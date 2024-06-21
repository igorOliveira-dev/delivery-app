import React, { useEffect } from 'react';
import UseUser from './UseUser';
import { useNavigate } from 'react-router-dom';
import Loading from '../../frontend/components/loading/Loading';

const DeliveryRouteProtector = ({ children }) => {
  const { user, userInfo, loading } = UseUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (userInfo.post != "delivery" && userInfo.post !== "master") {
        navigate("/");
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return user ? children : null;
}

export default DeliveryRouteProtector;