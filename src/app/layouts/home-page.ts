import { SplitViewData } from "../lib/split-view/split-view.component";
import { ComponentState } from "../lib/store/component-state.model";
import { creditScreen, teletypeScreen, venusScreen, appBar, logoScreen, navScreen } from "./shared-layouts";

const imageScreen = {
    id: 'image-screen',
    selector: 'app-image',
    data: {
        src: ''
    }
}

const appContent1: Partial<ComponentState<Partial<SplitViewData>>>[] = [{
    id: 'bottom-bar',
    data: {
        components: [
            'datetime-screen',
            'github-screen',
            creditScreen.id
        ],
    }
}, {
    id: 'right-content',
    data: {
        components: [
            teletypeScreen.id,
            venusScreen.id
        ],
    }
}, {
    id: 'top-bar',
    data: {
        components: [
            appBar.id,
            'order-button-2'
        ],
    }
}];

const appContent2: Partial<ComponentState<Partial<SplitViewData>>>[] = [{
    id: 'bottom-bar',
    data: {
        components: [
            'datetime-screen',
            creditScreen.id,
            'github-screen'
        ],
    }
}, {
    id: 'right-content',
    data: {
        components: [
            venusScreen.id,
            teletypeScreen.id
        ],
    }
}, {
    id: 'top-bar',
    data: {
        components: [
            appBar.id,
            'order-button-1'
        ],
    }
}];

export const homePage: ComponentState<any>[] = [
    appBar,
    logoScreen,
    venusScreen,
    creditScreen,
    teletypeScreen,
    {
        ...navScreen,
        data: {
            ...navScreen.data,
            selectedNav: 'HOME'
        }
    },
    {
        id: 'bottom-bar',
        selector: 'kr-split-view',
        data: {
            components: [
                'datetime-screen',
                creditScreen.id,
                'github-screen'
            ],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [30, 35, 35],
            disabled: true
        }
    },
    {
        id: 'datetime-screen',
        selector: 'kr-screen',
        data: {
            messages: [new Date(Date.now()).getTime()],
            containerStyle: {'margin': '0', "padding": "0", "flex-direction": "row", "align-items": "center"},
            textStyle: {"font-size": "1.5em", "display": "flex", "padding": "0 20px"}
        }  
    },
    {
        id: 'github-screen',
        selector: 'kr-screen',
        data: {
            messages: ['https://github.com/krossi439/kr-layers'],
            containerStyle: {'margin': '0', "padding": "0", "flex-direction": "row", "align-items": "center"},
            textStyle: {"font-size": "1.5em", "display": "flex", "padding": "0 20px"}
        }  
    },
    {
        id: 'order-button-2',
        selector: 'kr-action-button',
        data: {
            action: 'UpsertComponentStates',
            props: appContent2,
            label: '↔️',
            "buttonStyle": {"font-size": "2em", "font-weight": "600", "color": "yellow"},
            tooltip: "Swap Order"
        }
    },
    {
        id: 'order-button-1',
        selector: 'kr-action-button',
        data: {
            action: 'UpsertComponentStates',
            props: appContent1,
            label: '↔️',
            "buttonStyle": {"font-size": "2em", "font-weight": "600", "color": "yellow"},
            tooltip: "Swap Order"
        }
    },
    {
        id: 'right-content',
        selector: 'kr-split-view',
        data: {
            components: [venusScreen.id, teletypeScreen.id],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [50, 50],
            disabled: true
        }
    },
    {
        id: 'center-content',
        selector: 'kr-split-view',
        data: {
            components: [navScreen.id, 'right-content'],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [30, 70],
            disabled: true
        }
    },
    {
        id: "top-bar",
        selector: 'kr-split-view',
        data: {
            components: [appBar.id, 'order-button-1'],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [90, 10],
            disabled: true
        }
    },
    {
        id: 'layout-root',
        selector: 'kr-split-view',
        data: {
            components: ['top-bar', 'center-content', 'bottom-bar'],
            orientation: 'vertical',
            unit: 'pixel',
            sizes: [64, '*', 64],
            disabled: true
        }
    }
];
