import { useContext} from 'react'
 import  AlertContext  from "../../context/alert/AlertContext";

function Alert() {
    
    const {alert} = useContext(AlertContext);
    return alert !== null && (
        <div  className={`alertBox ${alert.type}`}>
               {alert.msg} 
        </div>
    )
    
}

export default Alert
