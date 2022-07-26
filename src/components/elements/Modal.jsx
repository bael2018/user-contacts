import { setModal } from "../../store/slices/usersSlice";
import cls from "../../scss/components/modal.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Modal = () => {
    const { isActiveModal, users, userId } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault()
            
        const result = users.map(user => user.id === userId ? {
                ...user, 
                name: !e.target[0].value ? user.name : e.target[0].value,
                username: !e.target[1].value ? user.username : e.target[1].value,
                email: !e.target[2].value ? user.email : e.target[2].value,
                phone: !e.target[3].value ? user.phone : e.target[3].value,
                website: !e.target[4].value ? user.website : e.target[4].value,
            } : user
        )
        
        localStorage.setItem('users', JSON.stringify(result))
        window.location.reload()
    }

    return (
        <div
            className={`${cls.user_modal} ${
                isActiveModal && cls.user_modal_active
            }`}
        >
            <div className={cls.user_modal__wrapper}>
                <button
                    onClick={() => dispatch(setModal(false))}
                    className={cls.user_modal__closer}
                >
                    &times;
                </button>
                <form onSubmit={formHandler}>
                    <h3>Edit user</h3>
                    <label>
                        <input required id="name" type="text" name="name" />
                        <span>Name</span>
                    </label>
                    <label>
                        <input
                            required
                            id="username"
                            type="text"
                            name="username"
                        />
                        <span>Username</span>
                    </label>
                    <label>
                        <input required id="email" type="text" name="email" />
                        <span>Email</span>
                    </label>
                    <label>
                        <input required id="phone" type="text" name="phone" />
                        <span>Phone</span>
                    </label>
                    <label>
                        <input
                            required
                            id="website"
                            type="text"
                            name="website"
                        />
                        <span>Website</span>
                    </label>
                    <div>
                        <button>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
