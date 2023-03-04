import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Header from "~/components/layout/Header";
import Landing from "~/components/Landing";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>QuarterMaster</title>
        <meta
          name="description"
          content="QuarterMaster kitchen inventory manager"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!sessionData?.user && <Landing />}
    </>
  );
};

export default Home;
