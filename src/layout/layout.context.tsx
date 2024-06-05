import { createContext, useState } from 'react';

export const LayoutContext = createContext({
  loader: false,
  setLoader: (value: any) => value,

  toast: {},
  setToast: (value: any) => value,
});

export const LayoutContextProvider = ({ children }: any) => {
  const [loader, setLoader] = useState(false);
  const [toast, setToast] = useState({});

  const value = {
    loader,
    setLoader,
    toast,
    setToast,
  };

  return (
    <>
      <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
    </>
  );
};

export default LayoutContextProvider;
