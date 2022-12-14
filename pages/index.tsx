import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[4rem] pt-16">Course Section</h1>
        </div>
      </main>
    </div>
  );
}
