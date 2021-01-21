import React from 'react'
import styles from '../../../styles/Iam/UserInputs.module.css'

const lang = {
    age : " 세",
    ageComment : "나이를 입력해주세요.",
    height : " cm",
    heightComment : "키(cm)를 입력해주세요.",
    weight : " kg",
    weightComment : "몸무게(kg)을 입력해주세요.",    
    salary : " 원",
    salaryComment : "연봉을 입력해주세요",
    iqComment : "IQ를 입력해주세요",
    
}

function UserInputs() {
    return (
        <div className={styles.container}>
            <div className={styles.inputBox} >
            <input  className={styles.input} name = 'age' type='number' maxLength="3" min='1' placeholder={lang.ageComment}/>
            {lang.age}
            </div>
            <div className={styles.inputBox} >
            <input className={styles.input} name = 'height' type='number' maxLength="3" min='1' placeholder={lang.heightComment}/>
            {lang.height} 
            </div>
            <div className={styles.inputBox} >
            <input className={styles.input} name = 'salary' type='number'  placeholder={lang.salaryComment}/>
            {lang.salary} 
            </div>
            <div className={styles.inputBox} >
            <input className={styles.input} name = 'weight' type='number' maxLength="3" min='1' placeholder={lang.weightComment}/>
            {lang.weight} 
            </div>
            <div className={styles.inputBox} >
            <input className={styles.input} name = 'iq' type='number' maxLength="3" min='1' placeholder={lang.iqComment}/>
             IQ
            </div>
        </div>
        
    )
}

export default UserInputs
