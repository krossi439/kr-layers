import { ComponentState } from "../lib/store/component-state.model";
import { logoScreen, creditScreen, datetimeScreen, navScreen } from "./shared-layouts";

export const quadPage: ComponentState<any>[] = [
    logoScreen,
    creditScreen,
    datetimeScreen,
    {
        ...navScreen,
        data: {
            ...navScreen.data,
            selectedNav: 'QUAD'
        }
    },
    {
        id: 'left-content',
        selector: 'kr-split-view',
        data: {
            components: [navScreen.id, creditScreen.id],
            orientation: 'vertical',
            unit: 'pixel',
            sizes: ['*', 350],
            disabled: true,
            editing: true
        }
    },
    {
        id: 'right-content',
        selector: 'kr-split-view',
        data: {
            components: [logoScreen.id, datetimeScreen.id],
            orientation: 'vertical',
            unit: 'pixel',
            sizes: ['*', 350],
            disabled: true,
            editing: true
        }
    },
    {
        id: 'layout-root',
        selector: 'kr-split-view',
        data: {
            components: ['left-content', 'right-content'],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [30, 70],
            disabled: true,
            editing: true
        } 
    }
];
