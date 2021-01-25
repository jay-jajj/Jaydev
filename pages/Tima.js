import React from 'react'
import Head from 'next/head';
import Nav from '../src/components/Tima/Nav'
import styles from '../styles/Tima/Tima.module.css';

function Tima() {
    return (
        <div id={styles.tima}>
            <Head>
                <title>Tima | 편리한 시간관리</title>
            </Head>
           
           <div>Tima</div>
           <Nav/>
        </div>
    )
}

export default Tima
