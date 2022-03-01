import React, { useEffect, useState } from "react";

import { useAuth } from "src/hooks/useAuth";
import { ReactChildrenProp } from "src/interfaces";
import { firebaseAuth } from "src/lib/firebase";

const ClientOnly: React.FC<ReactChildrenProp> = (props) => {
  const { children, ...delegated } = props;

  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const { setUser } = useAuth();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setHasMounted(true);
        console.log(user);
      } else {
        setUser(null);
        setHasMounted(true);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!hasMounted) return null;

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
