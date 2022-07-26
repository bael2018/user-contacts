import UserItem from "../elements/UserItem";
import { useSelector } from "react-redux";
import Loader from "../elements/Loader";

const UsersList = () => {
    const { users, isLoading } = useSelector((state) => state.users);

    return isLoading ? (
        <Loader />
    ) : users.length ? (
        users.map((user) => <UserItem key={user.id} user={user} />)
    ) : (
        <h3>No users</h3>
    );
};

export default UsersList;
