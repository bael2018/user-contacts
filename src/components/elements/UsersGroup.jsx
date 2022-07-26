import cls from "../../scss/components/group.module.scss";
import { initUsers } from "../../store/slices/usersSlice";
import { useDispatch } from 'react-redux'

const UsersGroup = () => {
    const dispatch = useDispatch()

    const groupInputHandler = (e) => {
        const groupedUsers = JSON.parse(localStorage.getItem('users')).filter(
            ({ username }) =>
                username[0].toLowerCase() === e.target.value.toLowerCase()
        );

        if (groupedUsers.length) {
            dispatch(initUsers(groupedUsers))
        } else {
            dispatch(initUsers(JSON.parse(localStorage.getItem('users'))))
        }
    };

    return (
        <div className={cls.users_group}>
            <span>Group by username: </span>
            <input
                onChange={groupInputHandler}
                placeholder="letter"
                maxLength="1"
                type="text"
            />
        </div>
    );
};

export default UsersGroup;
