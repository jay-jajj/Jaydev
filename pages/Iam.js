import React from 'react';

import Head from 'next/head';

import HamburgerMenu from '../src/components/Iam/HamburgerMenu';
import Imagebox from '../src/components/Iam/Imagebox';
import UserInputs from '../src/components/Iam/UserInputs';
import DisqusComments from '../src/components/Iam/DisqusComments';

import styles from '../styles/Iam/Iam.module.css';

import classNames from 'classnames';

const lang = { 
    title : "나는?",
    titlesub: "평균 알려주는 사이트"

}

function Iam() {
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
                
                <div className={classNames(styles.firstdesc, styles.red)}>
                info : 모든 입력창에 정보를 입력할 필요가 없습니다. 
                </div> 
                입력한 정보만 결과를 알려드립니다.<br></br>
                예민한 정보를 공유하면 그렇잖아요. <br></br>
                <del>그 왜 몸무게라던가, 몸무게라던가, 몸무게라던가...</del>
            </div>
            
            <Imagebox/>
            <UserInputs/>
            <div id={styles.shareButtons} class="addthis_inline_share_toolbox"></div>
            <div className={styles.section}>
                <div>불편한 점이나 개선사항은 댓글을 통해서 알려주세요!</div>
                그리고 다른 분류의 평균도 추가하고 싶으시면 댓글을 통해 많이 많이 알려주세요!
            </div>
            <DisqusComments post={{id : "iam", title:"I am?"}}/>
        </div>
    )
}

export default Iam
