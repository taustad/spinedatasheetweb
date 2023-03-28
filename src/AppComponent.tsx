import { useCurrentUser, useFusionEnvironment } from "@equinor/fusion";
import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { buildConfig, StoreAppScope } from "./api/config";
import { ResolveConfiguration } from "./api/environmentConfig";
import LandingPage from "./pages/landingPage/LandingPage";

const AppComponent: FC = () => {
    const fusionEnvironment = useFusionEnvironment()

    const basename = fusionEnvironment.env === "dev" ? "/" : "/apps/spinedatasheet";

    const currentUser = useCurrentUser();

    if (!currentUser) {
        return null;
    }

    console.log(fusionEnvironment.env)

    const config = ResolveConfiguration(fusionEnvironment.env)

    buildConfig(config.REACT_APP_API_BASE_URL)
    StoreAppScope(config.BACKEND_APP_SCOPE[0])

    return (
        <BrowserRouter basename={basename}>
            <LandingPage />
        </BrowserRouter>
    );
};

export default AppComponent;
