import { useState } from "react"
import "./child.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'animate.css'

const ChildApp = (props) => {
  const [share, setShare] = useState(false)
const [activated] = useState(true)

  const FindLocation = () => {
        navigator.geolocation.getCurrentPosition((position)=> {
            const latOrigin = position.coords.latitude
            const longOrigin = position.coords.longitude

            const lat = latOrigin.toString().slice(0,7)
            const long = longOrigin.toString().slice(0,7)

            console.log(lat, long)

            if ((lat === "32.0872" || "32.0871") && (long === "34.8041" || "34.8040")){
                props.setLocation("CyberPro");
            
            }
            else if (lat === "32.0871" && long === "34.8038"){
                props.setLocation("SumSum")
            }
            else if (lat === "32.0873" && long === "34.8036"){
                props.setLocation("Falafel")
            }
            else{
                props.setLocation("Loading...")
            }

        })
        
        setTimeout(FindLocation, 2000 );
    }




    return(
        <div className="main-child">
        <LocationOnIcon className="icon animate__bounce"/>
        {
            
            activated && <button className="track-btn" onClick={()=>[FindLocation(),setShare(!share)]} >{share? "Stop Tracking" : "Start Tracking"}</button>
        }
        {
            activated === false && 
            <button className="track-btn" onClick={()=>setShare(!share)} >{share? "Stop Tracking" : "Start Tracking"}</button>
        }
        {share &&(
            <h1 className="sharing">Sharing Your Location...</h1>
        )}
        </div>
    )
}

export default ChildApp