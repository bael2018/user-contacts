import { initUsers } from "../../store/slices/usersSlice";
import cls from "../../scss/components/sort.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UsersSort = () => {
    const [sort, setSort] = useState("default");
    const dispatch = useDispatch();

    useEffect(() => {
        if (sort === "default") {
            dispatch(initUsers(JSON.parse(localStorage.getItem("users"))));
        } else if (sort === "abc") {
            const sortedUsers = JSON.parse(localStorage.getItem("users")).sort(
                (a, b) => (a.username > b.username ? 1 : -1)
            );
            dispatch(initUsers(sortedUsers));
        } else {
            const sortedUsers = JSON.parse(localStorage.getItem("users")).sort(
                (a, b) => (a.username < b.username ? 1 : -1)
            );
            dispatch(initUsers(sortedUsers));
        }
    }, [sort, dispatch]);

    return (
        <div className={cls.users_sort}>
            <span>Sort by alphabet: </span>
            <div className={cls.users_sort__wrapper}>
                <h4>{sort}</h4>
                <div>
                    <p onClick={() => setSort("default")}>default</p>
                    <p onClick={() => setSort("abc")}>abc</p>
                    <p onClick={() => setSort("cba")}>cba</p>
                </div>
            </div>
        </div>
    );
};

export default UsersSort;
