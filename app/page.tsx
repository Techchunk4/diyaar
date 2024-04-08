import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      <Head>
        <title>Abdelkader's Portfolio</title>
        <meta name="description" content="Abdelkader's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Menu */}
      <header className="bg-gray-900 text-white p-4">
        {/* Your header menu items go here */}
        <nav>
          <ul className="flex justify-end">
            <li className="mr-4"><a href="#" className="hover:text-gray-400">Home</a></li>
            <li className="mr-4"><a href="#" className="hover:text-gray-400">About</a></li>
            <li className="mr-4"><a href="#" className="hover:text-gray-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Profile Image and Text */}
      <main className="bg-gradient-to-t min-h-screen flex items-center justify-center">
        <div className="text-center">

          <Image
            className="rounded-full h-40 w-40 mx-auto mb-4"
            src="/profile.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />

          <h1 className="text-4xl font-bold uppercase text-gray-600">Hi, I'm Abdelkader</h1>
          <p className="text-lg text-gray-500 uppercase ">I'm a Full stack Developer & Cloud Engineer.</p>
        </div>
        
      </main>
    </div>

  );
}
