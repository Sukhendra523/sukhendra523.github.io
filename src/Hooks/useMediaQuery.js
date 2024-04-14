import { useEffect, useState } from "react";

//Hook created for media queries.
const useMediaQuery = query => {
    const getMatches = q => {
      if (typeof window !== 'undefined') {
        return window.matchMedia(q).matches;
      }
      return false;
    };
  
    const [matches, setMatches] = useState(getMatches(query));
  
    const handleChange = () => setMatches(getMatches(query));
  
    useEffect(() => {
      const matchMedia = window.matchMedia(query);
  
      handleChange();
  
      matchMedia.addEventListener('change', handleChange);
  
      return () => matchMedia.removeEventListener('change', handleChange);
    }, [query]);
  
    return matches;
  };

  export default useMediaQuery;