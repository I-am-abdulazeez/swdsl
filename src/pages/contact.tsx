import Navbar from '@components/Navbar';
import Helmet from '@components/Helmet';

import ContactSwipe from '@components/SwipeComponent/ContactSwipe';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet title="Contact Shayo Team | ShayoWithDSL.com" />
      <Navbar />
      <ContactSwipe />
    </>
  );
};

export default Contact;
