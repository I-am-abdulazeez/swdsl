import React, { PropsWithChildren, useEffect, useState } from 'react';

const ClientOnly: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children, ...delegated } = props;

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
