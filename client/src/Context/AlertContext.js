// AlertContext.js
import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [reject, setReject] = useState(false)

  return (
    <AlertContext.Provider value={{ showAlert, setShowAlert, reject, setReject }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
