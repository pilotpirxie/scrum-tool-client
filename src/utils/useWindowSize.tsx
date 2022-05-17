import { useEffect, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
