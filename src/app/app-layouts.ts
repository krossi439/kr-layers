import { aboutPage } from "./layouts/about-page";
import { homePage } from "./layouts/home-page";
import { quadPage } from "./layouts/quad-screen";

export const layouts: {[key: string]: any} = {
    "HOME": homePage,
    "ABOUT": aboutPage,
    "QUAD": quadPage
};
