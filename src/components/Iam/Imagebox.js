import {useState} from 'react';
import Loading from './Loading'

import styles from '../../../styles/Iam/Imagebox.module.scss';
import classNames from 'classnames';





const lang = {
    boxContents : "클릭하거나 이미지를 끌어다 놓으세요.",
    btnContents : "지우기",
}

function onRemoveHandler(){
    document.getElementById("uploadFile").value = null;
    document.getElementById("userImage").classList.add(styles.hide);
    document.getElementById("removeButton").classList.add(styles.hide);
}






let model;

function Imagebox({set}) {

    let faceScore = []; 

    async function init() {
        const gender = document.getElementsByName("gender")[0].checked;
        let tenserflowURL =''
        if(gender){
            tenserflowURL = "https://teachablemachine.withgoogle.com/models/mwlvWWZv6/";
        }else{
            tenserflowURL = "https://teachablemachine.withgoogle.com/models/dUXzlgTff/";
        }
        const modelURL = tenserflowURL + "model.json";
        const metadataURL = tenserflowURL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
       ;
    }
    async function predict(image) {
        if(model){
         const prediction = await model.predict(image).then(data => data.map((value) => value.probability));
           faceScore = prediction
        }   
    }
    function dragNdrop(event) {
        try {
            document.getElementById("loading").classList.remove(styles.hide);
            let fileName =  URL.createObjectURL(event.target.files[0]);
            let image = new Image();
            image.src = fileName;
            init().then(() => {
                    predict(image).then(()=>{
                        set({face : faceScore});
                        const preview = document.getElementById("userImage");
                        preview.style.backgroundImage = `url(${fileName})`;
                        preview.classList.remove(styles.hide);
                        document.getElementById("loading").classList.add(styles.hide);
                        document.getElementById("removeButton").classList.remove(styles.hide);
                    }
                )
            });
           
        }catch (err){
        }
    }

    return (
            <div className={styles.uploadOuter}> 
                <span className={styles.dragBox} >
                <div id="userImage" className={classNames(styles.userImage, styles.hide)}></div>
                <span id="loading" className={classNames(styles.hide, styles.loadingbox)} ><Loading/></span>                
                <div className={styles.uploadImage}></div> 
                <div>{lang.boxContents}</div>
                <input name="image" type="file" onChange={dragNdrop}  id="uploadFile"  />
                </span>
                <button 
                id='removeButton' 
                className={classNames(styles.removeButton, styles.hide)} 
                onClick={onRemoveHandler}>{lang.btnContents}</button>
            </div>

    )
}

export default Imagebox
