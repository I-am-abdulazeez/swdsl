import React, { useEffect, useState } from "react";

import { useAuth } from "@hooks/useAuth";

import { ReactChildrenProp } from "@interfaces/index";

import { firebaseAuth } from "@config/firebase";

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
  }, [setUser]);

  if (!hasMounted) return null;

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
