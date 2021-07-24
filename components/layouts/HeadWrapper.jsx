import Head from "next/head";

const HeadWrapper = ({ children, data }) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>{data.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
    </>
  );
};

export default HeadWrapper;
