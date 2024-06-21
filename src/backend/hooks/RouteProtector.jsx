import React, { useEffect } from 'react';
import UseUser from './UseUser';
import { useNavigate } from 'react-router-dom';
import Loading from '../../frontend/components/loading/Loading';

const RouteProtector = ({ children }) => {
  const { user, loading } = UseUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return user ? children : null;
}

export default RouteProtector;