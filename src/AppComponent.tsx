import { useCurrentUser } from "@equinor/fusion";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";

const AppComponent: FC = () => {
    const basename = "/apps/spinedatasheet";

    const currentUser = useCurrentUser();

    if (!currentUser) {
        return null;
    }

    return (
        <BrowserRouter basename={basename}>
            <LandingPage />
        </BrowserRouter>
    );
};

export default AppComponent;
