import { Link } from "react-router-dom"

const NotFound = () => {

    return(
        <div className="not-found">
            <h2>Sorry :(</h2>
            <p>Seems like the page does not exist!</p>
            <Link to = '/'>Get back to Homepage</Link>
        </div>
    )
}

export default NotFound