import { createContext, useState } from 'react';

export const LayoutContext = createContext({
  loader: false,
  setLoader: (value: any) => value,

  coordinates: { latitude: 0, longitude: 0 },
  setCoordinates: (value: any) => value,

  toast: {},
  setToast: (value: any) => value,
});

export const LayoutContextProvider = ({ children }: any) => {
  const [loader, setLoader] = useState(false);
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [toast, setToast] = useState({});

  const value = {
    loader,
    setLoader,
    coordinates,
    setCoordinates,
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
