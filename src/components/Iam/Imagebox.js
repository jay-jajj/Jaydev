
import styles from '../../../styles/Iam/Imagebox.module.scss';
import classNames from 'classnames';


function dragNdrop(event) {
    try {
        let fileName = URL.createObjectURL(event.target.files[0]);
        const preview = document.getElementById("userImage");
        preview.style.backgroundImage = `url(${fileName})`;
        preview.classList.remove(styles.hide);
        document.getElementById("removeButton").classList.remove(styles.hide);
        console.log(preview, 'fileName : ',fileName);
    }catch{
    }
}





const lang = {
    boxContents : "클릭하거나 이미지를 끌어다 놓으세요.",
    btnContents : "지우기",
}

function onRemoveHandler(){
    document.getElementById("uploadFile").value = null;
    document.getElementById("userImage").classList.add(styles.hide);
    document.getElementById("removeButton").classList.add(styles.hide);
}

function Imagebox() {
    return (
            <div className={styles.uploadOuter}> 
                <span className={styles.dragBox} >
                <div id="userImage" className={classNames(styles.userImage, styles.hide)}></div>
                <div className={styles.uploadImage}></div> 
                <div>{lang.boxContents}</div>
                <input type="file" onChange={dragNdrop}  id="uploadFile"  />
                </span>
                <button 
                id='removeButton' 
                className={classNames(styles.removeButton, styles.hide)} 
                onClick={onRemoveHandler}>{lang.btnContents}</button>
            </div>
    )
}

export default Imagebox
