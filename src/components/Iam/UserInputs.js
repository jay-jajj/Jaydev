import React from 'react'

import styles from '../../../styles/Iam/UserInputs.module.css'

import classNames from 'classnames';

const inputs = [
    {   
        name : "age",
        type : "number",
        comment : "나이를 입력해주세요.",
        measure : "세"
    },
    {   
        name : "height",
        type : "number",
        comment : "키(cm)를 입력해주세요.",
        measure : "cm"
    },
    {   
        name : "weight",
        type : "number",
        comment : "몸무게(kg)을 입력해주세요.",
        measure : "kg"
    },
    {   
        name : "salary",
        type : "number",
        comment : "연봉을 입력해주세요.",
        measure : "만원"
    },
    {   
        name : "iq",
        type : "number",
        comment : "IQ를 입력해주세요",
        measure : "iq"
    },
]

function createInputBox(index, name, type, comment, measure){
    return ( <div key={index} className={styles.inputBox}>
                <input id={name} className={classNames(styles.input)}
                        name = {name} type={type}  placeholder={comment}/>
                {" "}<span>{measure}</span>
                <style jsx>{`
                    input{ border-color : cornflowerblue};}
                    span{color : cornflowerblue;}
                `}</style>
             </div>
    );
}

function UserInputs() {
    return (
        <div className={styles.container}>
            {inputs.map((input, index) => {
              return createInputBox(index, input.name, input.type, input.comment, input.measure);
            })}
            {/* next js에서는 style jsx가 기본적으로 내장되있어 이렇게 쓰면 된다! */}
            <style jsx global>{`

            `}</style>
        </div>
        
    )
}

export default UserInputs
