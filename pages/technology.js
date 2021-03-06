import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import axios from "axios";
export default function Home({ data, main_data }) {
  return (
    <div className="flex w-screen h-screen">
      <Head>
        <title>Technology</title>
        <meta name="description" content="Technology News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar className="w-1/5" data={data} />
      <Main className="w-4/5" data={main_data} type={"technology"} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = null;
  let main_data = null;
  await axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
    )
    .then((d) => {
      data = d.data;
    });
  await axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${process.env.API_KEY}`
    )
    .then((d) => {
      main_data = d.data;
    });

  return {
    props: { data, main_data }, // will be passed to the page component as props
  };
}
