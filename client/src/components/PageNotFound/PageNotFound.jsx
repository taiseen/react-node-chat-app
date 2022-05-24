import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => (

    <div className='pageNotFound'>

        <h1>4O4 | PageNotFound</h1>

        <Link to='/'>
            <p className='homeLink'>Go To Home Page</p>
        </Link>

    </div>

)

export default PageNotFound;