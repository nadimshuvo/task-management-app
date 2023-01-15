import { Sora } from "@next/font/google";
import Head from "next/head";
import Hero from "../components/Hero";

const sora = Sora({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Management App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/task.ico" />
      </Head>
      <main className={sora.className}>
        <Hero />
      </main>
    </>
  );
}
