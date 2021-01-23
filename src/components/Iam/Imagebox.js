
import styles from '../../../styles/Iam/Imagebox.module.scss';
import classNames from 'classnames';
import Head from 'next/head';





const lang = {
    boxContents : "클릭하거나 이미지를 끌어다 놓으세요.",
    btnContents : "지우기",
}

function onRemoveHandler(){
    document.getElementById("uploadFile").value = null;
    document.getElementById("userImage").classList.add(styles.hide);
    document.getElementById("removeButton").classList.add(styles.hide);
}

const tenserflowURL = "https://teachablemachine.withgoogle.com/models/EI2SvTwfT/";
let model, labelContainer, maxPredictions;
async function init() {
    const modelURL = tenserflowURL + "model.json";
    const metadataURL = tenserflowURL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
    labelContainer.appendChild(document.createElement("div"));
}
async function predict(image) {
    const prediction = await model.predict(image, false);
    return prediction;
    
}




function Imagebox({set}) {
    function dragNdrop(event) {
        try {
            let fileName =  URL.createObjectURL(event.target.files[0]);
            const preview = document.getElementById("userImage");
            preview.style.backgroundImage = `url(${fileName})`;
            preview.classList.remove(styles.hide);
            document.getElementById("removeButton").classList.remove(styles.hide);
            let image = new Image();
            image.src = fileName;
           set({face : predict(image)});
        }catch (err){
        }
    }
    init();
    return (
            <div className={styles.uploadOuter}> 
                <span className={styles.dragBox} >
                <div id="userImage" className={classNames(styles.userImage, styles.hide)}></div>
                <div className={styles.uploadImage}></div> 
                <div>{lang.boxContents}</div>
                <input name="image" type="file" onChange={dragNdrop}  id="uploadFile"  />
                </span>
                <button 
                id='removeButton' 
                className={classNames(styles.removeButton, styles.hide)} 
                onClick={onRemoveHandler}>{lang.btnContents}</button>
                 <div id="label-container"></div>

            </div>

    )
}

export default Imagebox
