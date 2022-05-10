import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header/header";
import { Section } from "../components/section/section";
import { Main } from "../components/main/main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Url shorting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Section />
      <Main />
    </div>
  );
};

export default Home;
