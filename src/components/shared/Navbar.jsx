import cls from '../../scss/components/navbar.module.scss'
import UsersSearch from '../elements/UsersSearch'
import UsersGroup from '../elements/UsersGroup'
import UsersSort from '../elements/UsersSort'

const Navbar = () => {
    return (
         <nav>
            <div className={cls.users_left}>
                <UsersSort/>
                <UsersGroup/>
            </div>

            <UsersSearch/>
        </nav>
    )
}

export default Navbar