import { useState } from 'react';

export function useRouter (initRoute) {
  const [route, setRoute] = useState(initRoute || '');
  return {
    route,
    setRoute
  };
}
