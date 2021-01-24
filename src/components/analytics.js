// analytics.js
import ReactGA from "react-ga";         
const initGA = () => { ReactGA.initialize("G-7TFKYEPTLC-1")} // 자신의 Goolge Analytics 번호 입력 }; 
const logPageView = () => { 
    ReactGA.set({ page: window.location.pathname }); 
    ReactGA.pageview(window.location.pathname); 
} 
const logEvent = (category = "", action = "") => {
     if (category && action) {
          ReactGA.event({ category, action}) 
    } 
}; 
const logException = (description = "", fatal = false) => {
     if (description) { 
         ReactGA.exception({ description, fatal })
    } 
}; 

export default { initGA, logEvent, logPageView, logException };

