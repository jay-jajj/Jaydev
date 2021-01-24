import React from 'react'
import classNames from 'classnames'
function loading() {
    return (
        <div className="load">
            <div className="letter-holder">
                <span className={classNames("l-1", "letter")}>L</span>
                <span className={classNames("l-2", "letter")}>o</span>
                <span className={classNames("l-3", "letter")}>a</span>
                <span className={classNames("l-4", "letter")}>d</span>
                <span className={classNames("l-5", "letter")}>i</span>
                <span className={classNames("l-6", "letter")}>n</span>
                <span className={classNames("l-7", "letter")}>g</span>
                <span className={classNames("l-8", "letter")}>.</span>
                <span className={classNames("l-9", "letter")}>.</span>
                <span className={classNames("l-10", "letter")}>.</span>
            </div>
            <style jsx>{`
            .load .letter {
                color : cornflowerblue;
                font-weight : bold;
                font-size : 1.6em;
                animation-name: loadingF;
                animation-duration: 1.6s;
                animation-iteration-count: infinite;
                animation-direction: linear;
              }
              
              .l-1 {
                animation-delay: 0.48s;
              }
              .l-2 {
                animation-delay: 0.6s;
              }
              .l-3 {
                animation-delay: 0.72s;
              }
              .l-4 {
                animation-delay: 0.84s;
              }
              .l-5 {
                animation-delay: 0.96s;
              }
              .l-6 {
                animation-delay: 1.08s;
              }
              .l-7 {
                animation-delay: 1.2s;
              }
              .l-8 {
                animation-delay: 1.32s;
              }
              .l-9 {
                animation-delay: 1.44s;
              }
              .l-10 {
                animation-delay: 1.56s;
              }
              @keyframes loadingF {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
            `}</style>
        </div>
    )
}

export default loading
