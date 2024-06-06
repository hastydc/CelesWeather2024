import { createContext, useState } from 'react';

export const LayoutContext = createContext({
  coordinates: { latitude: 0, longitude: 0 },
  setCoordinates: (value: any) => value,
});

export const LayoutContextProvider = ({ children }: any) => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const value = {
    coordinates,
    setCoordinates,
  };

  return (
    <>
      <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
    </>
  );
};

export default LayoutContextProvider;
