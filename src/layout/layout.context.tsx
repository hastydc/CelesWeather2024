import { createContext, useState } from 'react';

/**
 * Layout context to define shared states
 */
export const LayoutContext = createContext({
  coordinates: { latitude: 0, longitude: 0 },
  setCoordinates: (value: any) => value,
});

/**
 * Layout context provider
 * @param {Object} source data
 * @returns {Object} component
 */
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
