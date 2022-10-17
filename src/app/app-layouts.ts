import { aboutPage } from "./layouts/about-page";
import { homePage } from "./layouts/home-page";
import { quadPage } from "./layouts/quad-screen";
import { wavesPage } from "./layouts/waves-page";

export const layouts: {[key: string]: any} = {
    "WAVES": wavesPage,
    "HOME": homePage,
    "ABOUT": aboutPage,
    "QUAD": quadPage
};
