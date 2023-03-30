import { useCurrentUser, useFusionEnvironment } from "@equinor/fusion";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { buildConfig, StoreAppScope } from "./api/config";
import { ResolveConfiguration } from "./api/environmentConfig";
import AppRouter from "./AppRouter";

const AppComponent: FC = () => {
    const fusionEnvironment = useFusionEnvironment()

    const basename = "/apps/spinedatasheet";

    const currentUser = useCurrentUser();

    if (!currentUser) {
        return <div>User not logged in</div>
    }

    const config = ResolveConfiguration(fusionEnvironment.env)

    buildConfig(config.REACT_APP_API_BASE_URL)
    StoreAppScope(config.BACKEND_APP_SCOPE[0])

    return (
        <BrowserRouter basename={basename}>
            <AppRouter />
        </BrowserRouter>
    );
};

export default AppComponent;
