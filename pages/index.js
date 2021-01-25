import {useEffect} from "react";
import Head from 'next/head'
//nextjs 에서 클래스 네임 여러개 가능하게 해주는 라이브러리
import classNames from 'classnames';
import styles from '../styles/Home.module.css'
// const descriptionEn = "Nice meet you."; Do you want know More?
const langKo ={
    firstDescription : '만나서 반갑습니다. 저는 풀스택 개발을 공부하고 있는 Jay-JAJJ 라고 합니다.',
    knowBtn : '더 알고 싶으세요?',
    sectionParagraph : `저는 현재 부산디지털대학교에 재학중인 학생입니다. 
    현재 웹 (자바스크립트, 리액트, scss, next.js, node.js(server))을 공부하는 중입니다.
    데이터베이스는 mongoDB와 MYSQL을 다루어 보았고 공부중에 있습니다. 
    native 앱으로는 android(java)를 공부했고 간단한 프로젝트를 진행하였습니다.
    arduino와 rasberrypi를 다루면서 c를 공부했었고
    알고리즘 문제를 풀어가며 python을 공부 중입니다.
    그외에도 꾸준히 관심분야를 공부하며 지식을 쌓아가는 중입니다. 피드백과 조언은 언제나 환영입니다.`
}



let scrollCount = 0;

function onClickScrollDownHandler(){
    window.requestAnimationFrame(function(){
        scrollCount = window.pageYOffset;
        scrollDown() 
    });
}



function scrollDown(){
    scrollCount += 25;
    const heroBoxHeight = document.getElementById('hero').clientHeight;
    //cause -1 : window.pageYoffset defaultvalue 721.6.....
    if (window.pageYOffset < heroBoxHeight-0.5){
        window.scrollTo(0,scrollCount);
        window.requestAnimationFrame(function(){
            scrollDown();
        });

    }
    else {
    }
};

export default function Home() {
    useEffect(()=>{
        window.onscroll = function(){
            if (window.pageYOffset > 500) {
                document.getElementById('col-left').classList.add(styles['fade-in-left'])
                window.setTimeout(function(){
                    document.getElementById('col-right').classList.add(styles['fade-in-bottom'])
                },1000)
            }
        }   
    },[])
  return (
    <div className={styles.container} id='container'>
        <div className={styles.hero} id='hero'>
            <div className={styles['hero-content']}> 
                    <h1 className={styles.h1}>
                    <span className={styles.highlight}>Hello</span>, Everyone!<br/>
                    <span>Welcome to <span className={styles.highlight}>Jay-JAJJ</span>'s site.</span>
                </h1>
                <div className={styles.description}>{langKo.firstDescription}</div>
                <div className={styles.butttons}>
                    <button className={styles.button} onClick={onClickScrollDownHandler}>{langKo.knowBtn}</button></div>
                </div>
            <span className={styles["fa-angle-double-down"]} onClick={onClickScrollDownHandler}>↡</span>
            <div className={styles["gradient-overlay"]}></div>
        </div>
        <div className={styles['flex-wrapper']}>
            <div className={styles.section}>
                <div className={styles["gradient-2-overlay"]}></div>
                <div className={styles['col-left']} id='col-left'>
                    <h2 className={styles.h2}> My info <span className={styles['highlight-secondary']}>Boom!</span>?</h2>
                    <div className={styles.paragraph}>
                        {langKo.sectionParagraph}
                    </div>
                </div>
                <div className={styles['col-right']} id='col-right'>
                    <div className={styles['col-right-overlay']}></div>
                    이 기능은 아직 구현 되지 않았습니다. 
                    나중에 제 개발블로그가 완성되면 구현 시켜놓겠습니다.
                    <div className={styles['input-container']}>
                        <input className={styles.input} type='text' placeholder='Your name'/>  
                        <input className={styles.input} type='email' placeholder='Email' />
                        <button className={classNames(styles.button, styles['full-width'])}>Count Me In!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}
