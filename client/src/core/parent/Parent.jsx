import "./parent.css"

const ParentApp = (props) => {
const childName = "Yoni"
    return(
        <div className="main-parent">
            <button>Add a child</button>
            <h1 className="where">Where is {childName} ?</h1>
            <div className="card">
            <h2>Current Location</h2>
            <br />
            <h1 className="location">{props.data ? props.data : "Loading..."}</h1>
            <br />
            <p className="last-seen">{props.data ? "Last seen 10m ago" : "Loading..."}</p>
            </div>

        </div>
    )
} 

export default ParentApp