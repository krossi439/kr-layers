import { ComponentState } from "../lib/store/component-state.model";
import { creditScreen, appBar, logoScreen, navScreen } from "./shared-layouts";

export const wavesPage: ComponentState<any>[] = [
    appBar,
    logoScreen,
    {
        id: 'credit-screen',
        selector: 'kr-screen',
        data: {
            messages: [
                'Isometric Synthwave - The Great Wave off Kanagawa',
                ', Mike Airlino'
            ],
            containerStyle: {"justify-content": "center", "flex-direction": "row"},
            textStyle: {"font-size": "1.33em", "font-weight": "bolder"}
        }
    },
    {
        id: 'image-screen',
        selector: 'kr-image',
        data: {
            src: 'assets/images/synthwave-kanagawa.png',
            imgStyle: {
                height: "100%",
                width: "100%",
                background: "linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8))",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "mix-blend-mode": "plus-lighter"
            },
            containerStyle: {
                height: "100%",
                display: "flex",
                "align-items": "center",
                padding: "1em"
            }
        }
    },
    {
        ...navScreen,
        data: {
            ...navScreen.data,
            selectedNav: 'WAVES'
        }
    },
    {
        id: 'bottom-bar',
        selector: 'kr-split-view',
        data: {
            components: [
                'datetime-screen',
                creditScreen.id
            ],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [15, 85],
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
        id: 'center-content',
        selector: 'kr-split-view',
        data: {
            components: [navScreen.id, 'image-screen'],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [15, 85],
            disabled: true
        }
    },
    {
        id: "top-bar",
        selector: 'kr-split-view',
        data: {
            components: [appBar.id, 'github-screen'],
            orientation: 'horizontal',
            unit: 'percent',
            sizes: [50, 50],
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
