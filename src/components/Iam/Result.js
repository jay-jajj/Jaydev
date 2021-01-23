

function getAgePosition(age){
    //출처 주민등록인구통계
    if(age >= 10 && age <= 19){ 
        return {
            value : `${age}세는 10대 이고 10%`
        };
    }else if(age >= 20 && age <= 29){ 
        return {
            value : `${age}세는 20대이고 14%`
        };
    }else if(age >= 30 && age <= 39){ 
        return {
            value : `${age}세는 30대이고 14%`
        };
    }else if(age >= 40 && age <= 49){ 
        return {
            value : `${age}세는 40대이고 17%`
        };
    }else if(age >= 50 && age <= 59){ 
        return {
            value : `${age}세는 50대이고 18%`
        };
    }else if(age >= 60 && age <= 69){ 
        return {
            value : `${age}세는 60대이고 14%`
        };
    }else if(age >= 70 && age <= 79){ 
        return {
            value : `${age}세는 70대이고 8%`
        };
    }else if(age >= 80 && age <= 89){ 
        return {
            value : `${age}세는 80대이고 4%`
        };
    }else{ 
        return {
            value : `나이가 너무 어리거나 많으셔서 측정 불가`
        };
    }
}

function getHeightPosition(gender, height){
    if(gender === "man"){
        if(height > 192){
            return { 
                value : '상위 1%' 
            }
        }else if(height < 192 &&  height >= 187.5){
            return { 
                value : '상위 1% ~ 13%' 
            }
        }else if(height < 187.5 &&  height >= 184.3){
            return { 
                value : '상위 13% ~ 25%' 
            }
        }else if(height < 184.3 &&  height >= 177.9){
            return { 
                value : '상위 25% ~ 38%' 
            }
        }else if(height < 177.9 &&  height >= 173.9){
            return { 
                value : '상위 38% ~ 50%' 
            }
        }else if(height < 173.9 &&  height >= 170.1){
            return { 
                value : '상위 50% ~ 63%' 
            }
        }else if(height < 170.1 &&  height >= 164.4){
            return { 
                value : '상위 63% ~ 75%' 
            }
        }else if(height < 164.4 &&  height >= 160.1){
            return { 
                value : '상위 78 ~ 88%' 
            }
        }else{
            return { 
                value : '하위 88%' 
            }
        }
    }else{
        if(height > 177){
            return { 
                value : '상위1%' 
            }
        }else if(height < 177 &&  height >= 172.2){
            return { 
                value : '상위 1% ~ 13%' 
            }
        }else if(height < 172.2 &&  height >= 169.2){
            return { 
                value : '상위 13% ~ 25%' 
            }
        }else if(height < 169.2 &&  height >= 164.4){
            return { 
                value : '상위 25% ~ 38%' 
            }
        }else if(height < 164.4 &&  height >= 161.1){
            return { 
                value : '상위 38% ~ 50%' 
            }
        }else if(height < 161.1 &&  height >= 157.4){
            return { 
                value : '상위 50% ~ 63%'
            }
        }else if(height < 157.4 &&  height >= 152){
            return { 
                value : '상위 63% ~ 75%'
            }
        }else if(height < 152 &&  height >= 149.5){
            return { 
                value : '상위 78 ~ 88%'
            }
        }else{
            return { 
                value : '하위 88%' 
            }
        }
    }
}

function getWeightPosition(gender, weight){
    if(gender === "man"){
        if(weight <= 48){
            return { 
                value : '상위1%' 
            }
        }else if(weight <= 55  &&  weight > 48){
            return { 
                value : '상위 1% ~ 13%' 
            }
        }else if(weight <= 63 &&  weight > 55){
            return { 
                value : '상위 13% ~ 25%' 
            }
        }else if(weight < 69 &&  weight > 63){
            return { 
                value : '상위 25% ~ 38%' 
            }
        }else if(weight <= 78 &&  weight > 69){
            return { 
                value : '상위 38% ~ 50%' 
            }
        }else if(weight <= 93 &&  weight > 78){
            return { 
                value : '상위 50% ~ 63%'
            }
        }else if(weight < 105 &&  weight > 93){
            return { 
                value : '상위 63% ~ 75%'
            }
        }else{
            return { 
                value : '하위 75%' 
            }
        }
    }else{
        if(weight <= 40){
            return { 
                value : '상위1%' 
            }
        }else if(weight <= 43  &&  weight > 40){
            return { 
                value : '상위 1% ~ 13%' 
            }
        }else if(weight <= 49 &&  weight > 43){
            return { 
                value : '상위 13% ~ 25%' 
            }
        }else if(weight < 54 &&  weight > 49){
            return { 
                value : '상위 25% ~ 38%' 
            }
        }else if(weight <= 59 &&  weight > 54){
            return { 
                value : '상위 38% ~ 50%' 
            }
        }else if(weight <= 70 &&  weight > 59){
            return { 
                value : '상위 50% ~ 63%'
            }
        }else if(weight <= 86 &&  weight > 70){
            return { 
                value : '상위 63% ~ 75%'
            }
        }else{
            return { 
                value : '하위 75%' 
            }
        }
    }
}

function getSalaryPosition(salary){
    if(salary > 20000){
        return { 
            value : '상위 1%' 
        }
    }else if(salary < 20000 &&  salary >= 8800){
        return { 
            value : '상위 1% ~ 5%' 
        }
    }else if(salary < 8800 &&  salary >= 6950){
        return { 
            value : '상위 5% ~ 10%' 
        }
    }else if(salary < 6950 &&  salary >= 5062){
        return { 
            value : '상위 10% ~ 20%' 
        }
    }else if(salary < 5062 &&  salary >= 4064){
        return { 
            value : '상위 20% ~ 30%' 
        }
    }else if(salary < 4064 &&  salary >= 3380){
        return { 
            value : '상위 30% ~ 40%' 
        }
    }else if(salary < 3380 &&  salary >= 2864){
        return { 
            value : '상위 40% ~ 50%' 
        }
    }else if(salary < 2864 &&  salary >= 2434){
        return { 
            value : '상위 50 ~ 60%' 
        }
    }else if(salary < 2434 &&  salary >= 2153){
        return { 
            value : '상위 60 ~ 70%' 
        }
    }else if(salary < 2153 &&  salary >= 1888){
        return { 
            value : '상위 70 ~ 80%' 
        }
    }else if(salary < 1888 &&  salary >= 1166){
        return { 
            value : '상위 80 ~ 90%' 
        }
    }else{
        return { 
            value : '하위 90%' 
        }
    }
}


function getIqPosition(iq){
    if(iq > 145){       
        return {      
            value :"(천재)상위 0.1%"
        };
    }else if(iq >= 140 && iq < 145){
        return {        
            value :"(준천재)상위 0.2% ~ 0.4"
        };
    }else if(iq >= 130 && iq < 140){
        return {
         value :"(매우 우수)상위 0.5% ~ 2%"
        };
    }else if(iq >= 119 && iq < 130){
        return {        
            value :"(우수)상위 3% ~ 10%"
        };
    }else if(iq >= 109 && iq < 119){
        return {
            value :"(보통 이상)상위 10% ~ 30%"
        };
    }else if(iq > 91 && iq < 109){
        return {      
            value :"(보통)상위 30% ~ 70%"
        };
    }else if (iq >= 81 && iq < 91){
        return {      
            value :"(보통 이하)상위 70% ~ 90%"
        };
    }else{
        return {        
            value : "하위 90%"
        }
    }
}

function createResultBox(){
    
}


function Result({inputs}) {

    const result ={

    }


    return (
        <div>
            
        </div>
    )
}

export default Result
