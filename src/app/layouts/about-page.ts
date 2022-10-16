import { ComponentState } from "../lib/store/component-state.model";
import { creditScreen, logoScreen, datetimeScreen, navScreen } from "./shared-layouts";

export const aboutPage: ComponentState<any>[] = [
    creditScreen,
    logoScreen,
    datetimeScreen,
    {
        ...navScreen,
        data: {
            ...navScreen.data,
            selectedNav: 'ABOUT'
        }
    },
    {
        id: "sub-screen-1",
        selector: "kr-split-view",
        data: {
            components: [datetimeScreen.id, creditScreen.id],
            orientation: 'vertical',
            unit: 'percent',
            sizes: [50, 50],
            gutterStyle: {'background': 'transparent', 'border': '3px solid white', 'filter': 'blur(3px)'}
        }
    },
    {
        id: "sub-screen-2",
        selector: "kr-split-view",
        data: {
            components: [navScreen.id, 'sub-screen-1'],
            orientation: 'horizontal',
            unit: 'pixel',
            sizes: [400, '*'],
            gutterStyle: {'background': 'transparent', 'border': '3px solid white', 'filter': 'blur(3px)'}
        }
    },
    {
        id: 'layout-root',
        selector: 'kr-split-view',
        data: {
            components: [logoScreen.id, 'sub-screen-2'],
            orientation: 'vertical',
            unit: 'pixel',
            sizes: [375, '*'],
            gutterStyle: {'background': 'transparent', 'border': '3px solid white', 'filter': 'blur(3px)'}
        }   
    }
];
