import { useEffect, useState } from "react";

export function useIsClient() {
  const [val, setVal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setVal(true);
    }
  }, []);

  return val;
}