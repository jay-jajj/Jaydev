import React from 'react'

import styles from '../../../styles/Iam/GenderToggle.module.scss';



function GenderToggle() {
    return (
        <div id={styles.toggleContainer}>
            <input name="gender" type="checkbox" id={styles.gender}/>
            <label id={styles.label} htmlFor={styles.gender}>
                <span className={styles.knob}><i id={styles.i}></i></span>
            </label>
    
        </div>
    )
}

export default GenderToggle
