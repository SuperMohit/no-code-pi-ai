import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - MongoDB' : 'MongoDB'}</title>
        <meta name="description" content="MongoDB Low code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <div className="text-lg font-bold">MongoDB</div>
            </Link>
            <div>
              <Link href="/cart">
                <div className="p-2">Cart</div>
              </Link>
              <Link href="/login">
                <div className="p-2">Login</div>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>No code Mongo AI</p>
        </footer>
      </div>
    </>
  )
}