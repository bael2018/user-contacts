import { useParams, useNavigate } from "react-router-dom";
import cls from "../scss/pages/singleUser.module.scss";
import { useSelector } from "react-redux";

const SingleUser = () => {
    const { users } = useSelector((state) => state.users);
    const { userId } = useParams();
    const navigate = useNavigate();

    const {
        id,
        name,
        username,
        email,
        address: {
            street,
            suite,
            city,
            zipcode,
            geo: { lat, lng },
        },
        phone,
        website,
        company: { name: companyName, catchPhrase, bs },
    } = users.find((user) => user.id === +userId);

    return (
        <div className={cls.user_info}>
            <div>
                <button onClick={() => navigate("/")}>back to users</button>
                <p>
                    "id": <span>"{id}"</span>
                </p>
                <p>
                    "name": <span>"{name}"</span>
                </p>
                <p>
                    "username": <span>"{username}"</span>
                </p>
                <p>
                    "email": <span>"{email}"</span>
                </p>
                <p>
                    "address": <span>{"{"}</span>
                </p>
                <div>
                    <p>
                        "street": <span>"{street}"</span>
                    </p>
                    <p>
                        "suite": <span>"{suite}"</span>
                    </p>
                    <p>
                        "city": <span>"{city}"</span>
                    </p>
                    <p>
                        "zipcode": <span>"{zipcode}"</span>
                    </p>
                    <p>
                        "geo": <span>{"{"}</span>
                    </p>
                    <div>
                        <p>
                            "lat": <span>"{lat}"</span>
                        </p>
                        <p>
                            "lng": <span>"{lng}"</span>
                        </p>
                    </div>
                    {"}"}
                </div>
                {"}"}
                <p>
                    "phone": <span>"{phone}"</span>
                </p>
                <p>
                    "website": <span>"{website}"</span>
                </p>
                <p>
                    "company": <span>{"{"}</span>
                </p>
                <div>
                    <p>
                        "name": <span>"{companyName}"</span>
                    </p>
                    <p>
                        "catchPhrase": <span>"{catchPhrase}"</span>
                    </p>
                    <p>
                        "bs": <span>"{bs}"</span>
                    </p>
                </div>
                {"}"}
            </div>
        </div>
    );
};

export default SingleUser;
