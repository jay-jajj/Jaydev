import React,{useState} from 'react';

import Head from 'next/head';

import HamburgerMenu from '../src/components/Iam/HamburgerMenu';
import Imagebox from '../src/components/Iam/Imagebox';
import UserInputs from '../src/components/Iam/UserInputs';
import GenderToggle from '../src/components/Iam/GenderToggle';
import DisqusComments from '../src/components/Iam/DisqusComments';
import Result from '../src/components/Iam/Result';

import styles from '../styles/Iam/Iam.module.css';

import classNames from 'classnames';
// import Axios from 'axios';


const lang = { 
    title : "나는?",
    titlesub: "% 알려주는 사이트"
}



function Iam() {
    const [UserData, setUserData] = useState({});
    const [IsSubmit, setIsSubmit] = useState(false);
    const onSubmitHandler = function(){
         setUserData({
            ...UserData,
            gender : document.getElementsByName("gender")[0].checked,
            age :  document.getElementById("age").value,
            height : document.getElementById("height").value,
            weight : document.getElementById("weight").value,
            salary : document.getElementById("salary").value,
            iq : document.getElementById("iq").value,
        })
        document.getElementById("removeButton").style.display = 'none';
        setIsSubmit(true);
    }
    

    return (
        <div id={styles.font}>
            <Head>
                <title>{lang.title} | {lang.titlesub}</title>
                <meta name="keywords" content="퍼센트, 평균, 테스트, test, Average" />
                <script data-ad-client="ca-pub-7489851553699369" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-600929677ccbef45"></script>
                <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
                   {/*구글 애널리틱스 */}
                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7TFKYEPTLC"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());
                        gtag('config', 'G-7TFKYEPTLC');
                    </script>
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
                인체정보는 <span className={styles.highlight}>SizeKorea(한국인 인체조사)</span>
                의 데이터에 기반하여 알려드립니다. <br></br><br></br>
                키는 <span className='red'>큰</span> 순, 몸무게는 <span className='blue'>작은</span> 순, 
                연봉과 IQ는 <span className='red'>높은</span> 순 으로 상위를 매겼습니다.<br></br>
                나이는 상위가 아닌 대한민국 인구에  %만큼 알아주시면 감사하겠습니다.<br></br>
                키와 몸무게는 남녀가 구분되어 분석되며<br></br>
                IQ와 연봉은 남녀 구분이 없습니다
                <div className={classNames(styles.firstdesc, 'info')}>
                info : 모든 입력창에 정보를 입력할 필요가 없습니다.
                </div> 
                입력한 정보만 결과를 알려드립니다.<br></br>
                예민한 정보를 공유하면 그렇잖아요. <br></br>
                <del>그 왜 몸무게라던가, 몸무게라던가, 몸무게라던가...</del>
                <style jsx>{`.red{ color : red; font-weight : bold; font-size : 1.2em} .blue{ color : cornflowerblue; font-weight : bold; font-size : 1.2em} .info{ color:red; }`}</style> 
            </div>
                <div>
               
                <GenderToggle/>
                <Imagebox set ={setUserData}/>
                {IsSubmit ? <Result userData={UserData}/> : 
                    <React.Fragment>
                        <UserInputs/>
                        <button onClick={onSubmitHandler}>제출하기</button>
                    </React.Fragment>
                }
                 <style jsx>{`
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
                </div>
            
            
            
            
            <div className={styles.firstdesc}>공유하기</div>
            <div className = { classNames(styles.shareButtons,"addthis_inline_share_toolbox_415r")}></ div>
            <div className={styles.section}>
                <div>불편한 점이나 개선사항은 댓글을 통해서 알려주세요!</div>
                그리고 다른 종류의 %도 추가했으면 좋겠다! 싶으신 의견은
                 댓글을 통해 <span>많이 많이</span> 알려주세요!
                 <style jsx>{`span{ color:red; }`}</style> 
            </div>
            <DisqusComments className="disqus" post={{id : "iam", title:"I am?"}}>
            </DisqusComments>
        </div>
    )
}

export default Iam
