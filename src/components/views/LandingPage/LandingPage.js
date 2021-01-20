import React from 'react'
import './LandingPage.css'



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
    if (window.pageYOffset < heroBoxHeight-1){
        window.scrollTo(0,scrollCount);
        window.requestAnimationFrame(function(){
            scrollDown();
        });

    }
    else {
    }
};

window.onscroll = function(){
if (window.pageYOffset > 500) {
        document.getElementById('col-left').classList.add('fade-in-left')
        window.setTimeout(function(){
            document.getElementById('col-right').classList.add('fade-in-bottom')
        },500)
    }
}





function LandingPage() {
    return (
    <div className='container' id='container'>
        <div className='hero' id='hero'>
            <div className='hero-content'>
                <h1>NOT ALL THOSE WHO WANDER ARE 
                    <span className='highlight'>LOST</span>.<br/>
                    <span>YOUR <span className='highlight'>STORY</span> STARTS HERE.</span>
                </h1>
                <div className='description'>Lorem ipsum dolor sit amet, possim electram cum ad,
                 noster nemore mea ad. Ex qui velit fabulas verterem, ut vix inani dicit iudicabit,
                  ex congue utamur posidonium eam. Ea usu mundi malorum blandit. Mea honestatis adversarium ne,
                   sit te noster omittam.
                </div>
                <div className='buttons'><button onClick={onClickScrollDownHandler}>START EXPLORING</button></div>
            </div>
            <span className='fa fa-angle-double-down' onClick={onClickScrollDownHandler}>↡</span>
            <div className='gradient-overlay'></div>
        </div>
        <div className='flex-wrapper'>
            <div className='section'>
                <div className='gradient-2-overlay'></div>
                <div className='col-left' id='col-left'>
                    <h2> SO YOU LIKE TO <span className='highlight-secondary'>TRAVEL</span>?</h2>
                    <div className='paragraph'>
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
                <div className='col-right' id='col-right'>
                    <div className='col-right-overlay'></div>
                    Lorem ipsum dolor sit amet, 
                    possim electram cum ad, noster nemore mea ad.
                     Ex qui velit fabulas verterem.
                    <div className='input-container'>
                        <input type='text' placeholder='Your name'/>  
                        <input type='email' placeholder='Email' />
                        <button className='full-width'>Count Me In!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LandingPage
