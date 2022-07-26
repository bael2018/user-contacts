import cls from '../scss/pages/redirect.module.scss'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
    const navigate = useNavigate()
    
    return (
        <div className={cls.redirect}>
            <h3>NOT FOUND 404</h3>
            <button onClick={() => navigate('/')}>Back to users</button>
        </div>
    )
}

export default Redirect