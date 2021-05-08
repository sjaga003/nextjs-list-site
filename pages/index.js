import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        itaque, repudiandae quos sed eaque doloremque dolor animi mollitia odit
        qui alias nostrum voluptatem! Maxime rerum ab nobis corrupti, harum
        reiciendis?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        itaque, repudiandae quos sed eaque doloremque dolor animi mollitia odit
        qui alias nostrum voluptatem! Maxime rerum ab nobis corrupti, harum
        reiciendis?
      </p>
      <Link href="/ninjas" className="btn">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
