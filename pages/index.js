import {useEffect} from "react";
import Head from 'next/head'
//nextjs 에서 클래스 네임 여러개 가능하게 해주는 라이브러리
import classNames from 'classnames';
import styles from '../styles/Home.module.css'
// const descriptionEn = "Nice meet you."; Do you want know More?
const langKo ={
    firstDescription : '만나서 반갑습니다. 저는 풀스택 개발을 공부하고 있는 Jay-JAJJ 라고 합니다.',
    knowBtn : '더 알고 싶으세요?'
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
                        Lorem ipsum dolor sit amet, elementum curabitur ac vel lacus vulputate,
                        vivamus tellus ante rutrum dictum. Risus morbi eros etiam vel, ipsum nec porttitor,
                        sit wisi eu dictum in curae ipsum. <br/><br/>
                        Non in wisi tellus, proin in id,
                        consectetuer wisi et orci gravida et augue, amet arcu.
                        Tortor lectus nulla vitae lectus vestibulum, vel a nulla erat,
                        tempor ipsum quis vestibulum malesuada quam dictum, et scelerisque mattis justo, nec euismod nisl.
                        Vitae viverra a. Ante sed dolor, augue a lorem neque eu, sed aliquet euismod fermentum.
                        Vitae justo fringilla at, vivamus natoque ultrices, elit vivamus vitae fermentum volutpat tellus per,
                        sed elit massa in, sint torquent duis dolor lacus diam in. Ultrices vitae at sed enim pellentesque,
                        leo purus magna sit pulvinar sit, vitae dui dui, diam nunc eget non,
                        lectus sit nulla libero gravida. Sed lacinia augue.
                    </div>
                </div>
                <div className={styles['col-right']} id='col-right'>
                    <div className={styles['col-right-overlay']}></div>
                    Lorem ipsum dolor sit amet, 
                    possim electram cum ad, noster nemore mea ad.
                      Ex qui velit fabulas verterem.
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
