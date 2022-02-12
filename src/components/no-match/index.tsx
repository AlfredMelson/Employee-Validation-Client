import { Link } from 'react-router-dom'

const RouteMismatch = () => {
  return (
    <article style={{ padding: '100px' }}>
      <p>Page Not Found</p>
      <div className='flexGrow'>
        <Link to='/'>Head back</Link>
      </div>
    </article>
  )
}

export default RouteMismatch
