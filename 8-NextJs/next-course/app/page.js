'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  }

  return (
    <section>
      <h1>Next Js</h1>
      <Link href="/projects">Projects</Link>
      <button
        className='border bg-red-200 ml-5 my-10 px-2 py-4'
        onClick={() => navigate('about')}
      >
        Go To About Page
      </button>
      <button
        className='border bg-slate-200 ml-5 my-10 px-2 py-4'
        onClick={() => navigate('login')}
      >
        Go To Login Page
      </button>
    </section>
  )
}

export default Home;