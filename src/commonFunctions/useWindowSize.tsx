import React from "react";

const useScreenType = () => {
    const [windowSize, setWindowSize] = React.useState() as any;
  
    React.useEffect(() => {
      const handleResize = () =>{
        if (typeof window !== "undefined") {  
            let type;          
            if (window.innerWidth < 744)
                type = "MOBILE";
            else if (window.innerWidth >= 744 && window.innerWidth < 1133 && window.innerHeight > window.innerWidth)
                type = "TABLET_PORTRAIT";
            else if (window.innerWidth >= 744 && window.innerWidth < 1133)
                type = "TABLET";
            else if (window.innerWidth >= 1133 && window.innerWidth < 1280)
                type = "TABLET_LANDSCAPE";
            else  type = "DESKTOP";
            return setWindowSize(type)
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowSize;
  };

export default useScreenType;
// window.innerWidth < 744