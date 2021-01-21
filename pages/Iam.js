import React from 'react';

import HamburgerMenu from '../src/components/Iam/HamburgerMenu';
import Imagebox from '../src/components/Iam/Imagebox';
import UserInputs from '../src/components/Iam/UserInputs';
import styles from '../styles/Iam/Iam.module.css';

const lang = { 
    title : "나는?",

}

function Iam() {
    return (
        <div id={styles.font}>
            <HamburgerMenu/>
            <div id={styles.title}>{lang.title}</div>
            <div id={styles.section}>
                <div className={styles.firstdesc}>'대한민국에서 나는 몇퍼센트 일까?' 
                    OR '나의 (키, 연봉, IQ)는 몇퍼센트일까?'</div>
                <div>
                궁금하지 않으셨나요? 지금 알려드리겠습니다!
                </div>
                <div className={styles.aiImage}></div>
                외모는 인공지능(AI)이 평가해줍니다.<br>
                </br>
                그외의 정보는 <span className={styles.highlight}>KOSIS(국가 통계 포털)</span>의 데이터에 기반하여 알려드립니다.
                
                <div className={styles.firstdesc}>
                info : 모든 입력창에 정보를 입력할 필요가 없습니다. 
                </div> 
                입력한 정보만 결과를 알려드립니다.<br></br>
                예민한 정보를 공유하면 그렇잖아요. <br></br>
                <del>그 왜 몸무게라던가, 몸무게라던가, 몸무게라던가...</del>
            </div>
            
            <Imagebox/>
            <UserInputs/>
        </div>
    )
}

export default Iam
