import Head from "next/head";
import { HelmetProps } from "src/interfaces";

const Helmet: React.FC<HelmetProps> = (props) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="ShayoWithDSL | #1 Online wine store" />
      <meta property="og:title" content="ShayoWithDSL | #1 Online wine store" />
      <meta property="og:description" content="#1 Online wine store" />
      <meta property="og:image" content="/images/logo.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Helmet;
