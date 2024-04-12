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
        {/* Logo */}
        <div className="flex items-center justify-between">
          {/* Replace "logo.png" with the path to your logo image */}
          <img
            className="h-10 w-auto"
            src="/logo.png"
            alt="Logo"
          />

          {/* Your header menu items go here */}
          <nav>
            <ul className="flex justify-end">
              <li className="mr-4"><a href="#" className="hover:text-gray-400">Home</a></li>
              <li className="mr-4"><a href="https://www.linkedin.com/in/abdelkader-ismail/" className="hover:text-gray-400">About</a></li>
              <li className="mr-4"><a href="#" className="hover:text-gray-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Profile Image and Text */}
      <main className=" min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Image
            className="rounded-full h-40 w-40 mx-auto mb-4"
            src="/profile.jpg"
            alt="Next.js Logo"
            width={180}
            height={180}
            priority
          />

          <h1 className="text-xl font-bold uppercase text-gray-600">Hi, I'm Abdelkader</h1>
          <p className="text-sm text-gray-500 uppercase">I'm a Full stack Developer🚀.</p>
        </div>
      </main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Abdelkader. All rights reserved.</p>
      </footer>
    </div>
  );
}
