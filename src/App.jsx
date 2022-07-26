import { appRoutes } from "./constants/appRoutes";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import './scss/style.scss'

const App = () => {
    return (
        <div className="root">
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {appRoutes.map((route) => (
                        <Route key={route.id} {...route} />
                    ))}
                </Route>
            </Routes>
        </div>
    );
};

export default App;
