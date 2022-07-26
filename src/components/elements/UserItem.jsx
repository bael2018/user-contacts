import { setModal, setUserId } from "../../store/slices/usersSlice";
import cls from "../../scss/components/userItem.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'

const UserItem = ({ user }) => {
    const dispatch = useDispatch()
    const { id } = user;

    const navigate = useNavigate();

    const editModalHandler = () => {
        dispatch(setModal(true))
        dispatch(setUserId(id))
    }

    return (
        <div className={cls.user}>
            <div className={cls.user_body}>
                <p className={cls.user__name}>
                    <span>Username:</span> ${user.username}
                </p>
                <p className={cls.user__email}>
                    <span>Email:</span> ${user.email}
                </p>
                <p className={cls.user__phone}>
                    <span>Phone:</span> ${user.phone}
                </p>
                <div>
                    <button onClick={() => navigate(`/user/${id}`)}>
                        read more
                    </button>
                    <button onClick={editModalHandler}>edit</button>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
