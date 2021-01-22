import React,{useState} from 'react';

import Head from 'next/head';

import HamburgerMenu from '../src/components/Iam/HamburgerMenu';
import Imagebox from '../src/components/Iam/Imagebox';
import UserInputs from '../src/components/Iam/UserInputs';
import DisqusComments from '../src/components/Iam/DisqusComments';

import styles from '../styles/Iam/Iam.module.css';

import classNames from 'classnames';
import Axios from 'axios';


const lang = { 
    title : "나는?",
    titlesub: "% 알려주는 사이트"

}


const onSubmitHandler = function(event){
    
}

function Iam() {

    const [IsSubmit, setIsSubmit] = useState(false);

    return (
        <div id={styles.font}>
            <Head>
                <title>{lang.title} | {lang.titlesub}</title>
                
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-600929677ccbef45"></script>

            </Head>
            <HamburgerMenu/>
            <div id={styles.title}>{lang.title}</div>
            <div className={styles.section}>
                <div className={styles.firstdesc}>'대한민국에서 나는 몇퍼센트 일까?' 
                    OR '나의 (키, 연봉, IQ)는 몇퍼센트일까?'</div>
                <div>
                궁금하지 않으셨나요? 지금 알려드리겠습니다!
                </div>
                <div className={styles.aiImage}></div>
                외모는 인공지능(AI)이 평가해줍니다.<br>
                </br>
                그외의 정보는 <span className={styles.highlight}>KOSIS(국가 통계 포털)</span>의 데이터에 기반하여 알려드립니다.
                
                <div className={classNames(styles.firstdesc)}>
                info : 모든 입력창에 정보를 입력할 필요가 없습니다.
                <style jsx>{`div{ color:red; }`}</style> 
                </div> 
                입력한 정보만 결과를 알려드립니다.<br></br>
                예민한 정보를 공유하면 그렇잖아요. <br></br>
                <del>그 왜 몸무게라던가, 몸무게라던가, 몸무게라던가...</del>
            </div>
            {IsSubmit ? <h1>결과창</h1>: 
            <form  onSubmit={onSubmitHandler}>
                <Imagebox/>
                <UserInputs/>
                <button type="submit">제출하기</button>
                <style jsx>{`
                // form{
                //     width : 100%;
                //     height : fit-content;
                //     display : flex;
                //     flex-drirection: column;
                //     align-items: center;
                //     justify-content : center;
                //     text-align : center;
                // }
                button{
                    display : block;
                    margin-left : auto;
                    margin-right : auto;
                    margin-top : 1vh;
                    color : white; 
                    font-size : 1.2em;
                    font-weight : bold;
                    background-color: cornflowerblue;
                    border : 5px solid blue;
                    border-radius : 5px;
                }`}</style>
            </form>
            }
            
            <div className={styles.firstdesc}>공유하기</div>
            
            <div className = { classNames(styles.shareButtons,"addthis_inline_share_toolbox_415r")}></ div>
            
            <div className={styles.section}>
                <div>불편한 점이나 개선사항은 댓글을 통해서 알려주세요!</div>
                그리고 다른 종류의 %도 추가했으면 좋겠다! 싶으신 의견은
                 댓글을 통해 <span>많이 많이</span> 알려주세요!
                 <style jsx>{`span{ color:red; }`}</style> 
            </div>
            <DisqusComments post={{id : "iam", title:"I am?"}}/>
        </div>
    )
}

export default Iam
