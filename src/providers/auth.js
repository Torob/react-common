import React, { useContext, useState, useEffect } from 'react';
import useTorobAPI from '../hooks/useTorobAPI';
import urls from '../urls';

const context = React.createContext();

const AuthProvider = ({ children }) => {
  const [resource] = useTorobAPI(
    {
      method: 'GET',
      url: urls.auth.info(),
    },
    {}
  );

  const [activeInstance, setActiveInstance] = useState({
    instanceType: 'internet_shop',
    instanceId: 0,
    instanceName: '',
  });

  useEffect(() => {
    let tempInstance = {};
    if (resource.isLoading || !resource.data) {
      tempInstance.instanceId = 0;
    } else {
      if (resource.data.panel_accesses.length && resource.data.panel_accesses[0].objects.length)
        tempInstance.instanceId = resource.data.panel_accesses[0].objects[0].instance_id;
      tempInstance.instanceName = resource.data.panel_accesses[0].objects[0].name;
    }
    setActiveInstance({ ...activeInstance, ...tempInstance });
  }, [resource]);

  const user = {
    isLoading: resource.isLoading,
    isAuthenticated: !resource.isError,
    user: resource.data,
  };

  return <context.Provider value={{ user, activeInstance, setActiveInstance }}>{children}</context.Provider>;
};

const useAuth = () => useContext(context);

export { AuthProvider, useAuth };
