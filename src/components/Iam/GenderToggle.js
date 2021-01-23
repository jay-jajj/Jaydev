import React from 'react'

import styles from '../../../styles/Iam/GenderToggle.module.scss';

function GenderToggle() {
    return (
        <React.Fragment>
            <input type="checkbox" id={styles.gender}/>
            <label id={styles.label} for={styles.gender}>
                <span className={styles.knob}><i id={styles.i}></i></span>
            </label>
    
        </React.Fragment>
    )
}

export default GenderToggle
