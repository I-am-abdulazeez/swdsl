import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { firebaseAuth } from "src/lib/firebase";

export default function ClientOnly({ children, ...delegated }: any) {
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

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
