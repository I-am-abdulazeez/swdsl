import Navbar from "@components/Navbar";
import Helmet from "@components/Helmet";

import ContactSwipe from "@components/SwipeComponent/ContactSwipe";

const Index: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet title="Contact Shayo Team | ShayoWithDSL.com" />
      <Navbar />
      <ContactSwipe />
    </>
  );
};

export default Index;
