import { useEffect, useState } from 'react';

let isSupported;

export const useNativeLazyLoading = () => {
  const [supported, setSupported] = useState(isSupported);

  useEffect(() => {
    if (isSupported === undefined) {
      isSupported = 'loading' in HTMLImageElement.prototype;

      setSupported(isSupported);
    }
  }, []);

  return supported;
};
