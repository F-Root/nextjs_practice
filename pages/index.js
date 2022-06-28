import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>hello, nextjs 3 - exp</h1>
      <ol>
        <li>
          <Link href='/sub'>/sub/index.js</Link>
        </li>
        <li>
          <Link href='/sub/about'>/sub/about.js</Link>
        </li>
        <li>
          <Link href='/sub/1'>/sub/[id].js</Link>
        </li>
      </ol>
    </div>
  );
}
