import cls from "../../scss/components/search.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const UsersSearch = () => {
    const [searchedUsers, setSearchedUsers] = useState([]);
    const { users } = useSelector((state) => state.users);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const value = e.target.value.toLowerCase();

        const filteredPosts = users.filter((user) =>
            user.username.toLowerCase().includes(value)
        );

        setSearchedUsers(filteredPosts);

        if (!value.trim() || !filteredPosts.length) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const inputNavigateHandler = (id) => {
        navigate(`/${id}`)
        setIsVisible(true)
    };

    return (
        <div className={cls.users_search}>
            <div className={cls.users_search__wrapper}>
                <input
                    onChange={inputHandler}
                    className={cls.users_search__input}
                    type="text"
                    placeholder="Search"
                />
                <div
                    className={`${cls.users_search__result} ${
                        isVisible && cls.invisible
                    }`}
                >
                    {searchedUsers.map((user) => (
                        <p
                            key={user.id}
                            onClick={() => inputNavigateHandler(user.id)}
                        >
                            Username: ${user.username}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersSearch;
