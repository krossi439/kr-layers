import { Update } from "@ngrx/entity";
import { SplitViewData } from "./lib/split-view/split-view.component";
import { ComponentState } from "./lib/store/component-state.model";

export const logoScreen = {
    id: 'logo-screen',
    selector: 'kr-screen',
    data: {
      messages: [
        `
        ██╗░░░░░░█████╗░██╗░░░██╗███████╗██████╗░░██████╗
        ██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔══██╗██╔════╝
        ██║░░░░░███████║░╚████╔╝░█████╗░░██████╔╝╚█████╗░
        ██║░░░░░██╔══██║░░╚██╔╝░░██╔══╝░░██╔══██╗░╚═══██╗
        ███████╗██║░░██║░░░██║░░░███████╗██║░░██║██████╔╝
        ╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░`,
        `
        █▀ ▀█▀ ▄▀█ ▀█▀ █▀▀  █▀▄ █▀█ █ █░█ █▀▀ █▄░█  █░█ █
        ▄█ ░█░ █▀█ ░█░ ██▄  █▄▀ █▀▄ █ ▀▄▀ ██▄ █░▀█  █▄█ █`
      ],
      textStyle: { 'font-size': '1.5em', 'white-space': 'break-spaces'}
    }
};

export const venusScreen = {
    id: 'venus-screen',
    selector: 'kr-screen',
    data: {
        messages: [
            `
            ▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▓▓▓█▀▀███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀░░▒▒░░    '░░░,,"▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀▒▒▒▒░░,░░▒░░        ╙▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▐╣▒╣▒░░░▒╖░▒─;╓,,  '░▒╓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▐▒▒▒░▒▓▓▄▒╢╜▒░░░      ╙▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▌▓▓▒╙▓▓▒╢D%▒K╣▒▒░░        ░▄H▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▌▒╢▓▓▓▓▓█▓▓▓▓▒▒▒░        ,,░╫τ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓╣╣▒æ@Ñ▓███╖ ]▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀████▓▓▓▓▓███▓▀▀██▓▒ ▒▒▀╟▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓█▓╬▓▓██▓███▓▓▓▒▒╜╜╜╙ ░▒▓▓    ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓▓▓▓╣▒▒░░,░░▓▄▄▄▄@░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▒▒░░████▌░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓████▓╢▓▓▓▓▓▓▓╣╣▒████▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀╣╢╫▓▓▓▓▓▓╣▒╟▓▓█▓░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌▒▒╢╢▓▓▓▓▓╣╣▒░╖p╖▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█║╢▒▒╫▓▓▓▓▓▓▓██▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░║▓▓▓▓▓╣╢╢▓▓▓██▒░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌▒╫▓▓▓████████╣▒▒░"▀▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▒▓▓███████▓▓╣▒░░      '▀▀▓▓▓▓▓▓▀▀'"▀░▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀░▒╫▓▓█████▓▓▒▒▒░░           ░ ░░░░░░░░░'░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒╢▓▓████▓▓▓╣▒▒▒░░            ░░░░░░░░░░░ ░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████▓╣▒▒▒▒░              ░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▒▒░░░░░░░   ░          ░░░░░░░░░░▒╬╣▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓█▀▒▒╢▓▓▓▓▓╢╫▓▒▒▒╜╜╜▒▒░░   ░░░ ░░            ░░░░░░░░▒▒▒╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓█▀░░░░░░▒▒▒▒▒▒▒▒▒▒▒░░░                         ░░░  ░░░░▒▒▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓█ ▒░░░░░░░░░░░▒▒░▒░░░░░░░ ░░      ░░     ░░   ░░░░░░░░░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▌░▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░ ░     ,   ░░░░░░░ ░░░░░░░░░▒▒▒▒╣▓╢▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓█░▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░     ░   ░░░░░░░░░░░░░░░░░▒▒║╢╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▌▒▒▒▒▒▒▒░░░░░░▒▒▒▒░░░░░░░░░░░░░░   ░░░░░░░░░░░░░░░░ ░░░░░░░▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▌▒▒▒▒▒▒▒▒░░ ░░▓▓▒▒▒▒▒▒░░░░░░       ░░░░░░░░░░▒░░░░░░░░░░░░░▒▒╢╫▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▌▒▒▒▒▒▒▒▒░░░░░╙█▓▓╢▒▒▒▒░░░              ░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓█▒▒▒▒▒▒▒▒░░░░░  ▀█▓▓╣▒▒░░░░░░░  ░░    ░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢╢╬╣╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓░▒╣╢▒▒▒▒░░░░   ░ ▐▓╣╣▒▒░░░░░░░░░░░░░░░░░░▒▒╢╢╣╢╣╢╢╢▒▒╢╢╢╢▓▓▓▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▌▒╢╢╣▒▒▒▒▒░░░     ▓▓▓▓▒@@▒▒▒▒▒░▒▒░░░▒▒▒▒▒▒▒╢╫▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╫▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▒▒▒▒╣▒▒▒▒@░░    '└▓▓███▓▓▓▓╢▒▒▒╢▒▒▒▒▒▒▒▒▒▒▒╫▓▓▓▓▓▓▓▓▓██▓█▓▓▓╣╫▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▒▒▒╢▒▒▒▒░░░░ ,,░░╠████████▓▓▓▓▓▓▓▓▓╣▒▒▒▒▒▒▒▒╢▓▓▓████████▓╣╢╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▌▒╢╢╢▒▒▒▄▓█████████████████████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒╜╜▒▓▓▓▓▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▒╢╢▓▓█████████████████████████▓▒▒░░░░▒▒▒░░░░░░░░░▒░░▒▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▒██████████████╢▓▓▓▓▓▓████▓╣▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓████████████░╢╢╢▓▓▓▓▓█▓▓╣╢╣╢╢╢╣╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓█████▓╢╢▓▓░▒▒╢╫▓▓▓▓▓▓▓▓▓▓╢╣╣╢╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌▒▒╢╢▓▓▓▓▓▓▓▓▓╣╢╢╣╣╢╢▒╣▒▒╢╢╢╢╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒╢╢╢╢╢╢╢╢╣╣╢╣╢╢╣╢╢╢╢╢╣╢╢╢╢╣╢▒▒▒╢╢╢╢╢▒▒▒▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▒▒╢╢╢▓▓▓▓▓▓▓▓▓▓▓▓╣▓▓╣╢╢╢╢╢╣╢╢╢╢╢╢╢╣╣╢▒▒▒▒╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒╢╫▓▓▓▓╣╣▒╢╢╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢╢╢╢╢╢╣╣╢╢╢▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒▒▒▒▒▒▒░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒░▒▒░▒▒▒▒▒▒▒░▒░░░░░▒▒▒░░▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░▒▒▒▒▒▒░░▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ░░░░░░░░░░░░▒░░░░,░░░░▒╫▓▓▒▒▒▒░░░░░░▒▒▒▒▒▒░░░▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ ░░░░░░░░▒▒▒▒▒▒▒▒░░░░      ░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒▒▒▒░░ ░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▒▒▒▒▒▒▒╣▒╢▒╢╢▒▒▒▒▒▒▒▒▒▒▒▒░░░░░▒▒▒▒▒▒░░░░░░░▒▒▒▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▌ ░░▒▒▒╢╢╢╣╢╢╣╢╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░▒▒▒▒╢╢╢╢╢╢╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▓░░░▒▒▒▒▒▒▒▒╢╢╢╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒╫▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓▌░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░░░░░░▒▒▒╫▓▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▓░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▒░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░▒▒",,░░▒▒@▒▒╢ ░░░,░▒╫▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▓░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░╓╖░░░░░░╓╜░,m╜░░░▒▒▒▒▒▒╣▒▒▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒╖╫▓▓▓▓▓▓"░░▒░░░░░m░░▒░▒▒░░╢╢╜▒▒▄▓▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░╜╩╨╜░░░░╖░░░▒ÑÑ▓▓▓Ñ╝░░▒@░░░░░░░▒▒▒░░░░░▒▄@▓▓▒▒█▓▓▓▓▓▓
            ▓▓▓▓▓▓▓▓▓░▒▒▒▒▒▒▒▒▒▒▒▒@@▒╖░▒▒▒▒▒▒▒▄█▄▄▄████▓▓░▒▒╟▒▒▒▒▒░░▒▒░░░▓@g╣▓▒▒▓██▀▀╜║▒▒▓▓▓
            ▓▓▓▓▓▓▓░▒░'""╙╜╝╝╨▒▓╢@╝▒░▄▄▄█████▀▓▓▓▓▀▓╢▒▒▒▒▒▒╜▒@╜▒▒▒▒░░░░░ ▐▓▓▓█▀▀░▒╢╢╬▓▓@▓▓▓▓
            ▓▓▓▓▓▓ ░░░░▒▄▄▓▄▓@░░░╓▓▓▓██▀█▓████▓▓╣▓▒▒▓▓█▒▒╢░▒░▒╫▓▓▓░░░░░░░░▒▄▄▄▄▄▄▄▄▄██▓▓█▓▓▓
            ▓▓▓▓▓█████████▓▒╢▒▒█▓▓▓▄▄█████▓▓▓████▓▄▓▓▓█▓▓╝╜▒▒░░░░░░░░ ░░░░░▀▀▀▀▀█████████▓▓▓
            ▓▓▓▓▓▓▓▓▓█▓▓▓▓▓██████▓██▀▓╣▒▒▒▒▒▒╢▒▓▓▓▒▒▒▓▒░░▒▒▒░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒██╢╢▓▓▓
            ▓▓▓▓▓▓▌▒╢╫▓▓▓▓▓█████▀▒▒▒▒▒▒▒▓▓█████╢▓╣╣▒╣▒▒▒▒▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒░▒▒▒▒▒▒▒▒╢╢▒█▓▓▓▓▓
            ▓▓▓▓▓▓▒▒▒╢▓▓▓▓▓▓▓▓▓▓▓▓▓╣▓▓▓█████▓▓╣▓▓▓╣▒▒▒▒╣░▒▒▒▒▒▒▒▒░▒░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢▓▓▓▓▓▓
            ▓▓▓▓▓▓▒▒╢╢▓▓▓▓▓▒╢▓▓▓██████████▓╣▓▓▓▓▓▓▒▒▒▒╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢╢╣╢╢╢▓▓▓▓▓▓
            ▓▓▓▓▓▒▒▒▒▒▒╢╢▒▓█████████████▓▓▒▓▓▓▓▓▓▒╢▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢▒╫╣▓▓▓▓▓▓
            ▀▀▀▀╩╩╩╩╩▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀╩╝╝╩╝╩╩╩╩╝╩╝╨╨╨╨╨╨╨╨╨╨╨╨╨╨╜╝╩╩╩╝╝╝╩╩╩▀▀▀▀▀▀`
        ],
        textStyle: { 'font-size': '7px', 'white-space': 'break-spaces'}
    }
}

export const navScreen = {
    id: 'nav-screen',
    selector: 'kr-screen',
    data: {
        messages: [
            'CHOOSE CONFIGURATION:'
        ],
        navItems: [
            'HOME',
            'ABOUT',
            'QUAD'
        ],
        textStyle: { "font-size": "2em", "margin": "0.5em 0", "white-space": "no-wrap" }
    }
}

export const creditScreen = {
    id: 'credit-screen',
    selector: 'kr-screen',
    data: {
        messages: [
            'Kayla Rossi'
        ],
        containerStyle: {"justify-content": "center"},
        textStyle: {"margin": "0.5em 0", "line-break": "anywhere", "font-weight": "bolder"}
    }
};

export const datetimeScreen = {
    id: 'datetime-screen',
    selector: 'kr-screen',
    data: {
        messages: [
            new Date(Date.now()).toISOString(),
            'https://github.com/krossi439/kr-layers'
        ],
        textStyle: { "font-size": "2em", "margin": "0.5em 0" }
    }
};

export const appBar = {
    id: 'appbar',
    selector: 'kr-screen',
    data: {
        messages: [
            `█░░ ▄▀█ █▄█ █▀▀ █▀█ █▀
 █▄▄ █▀█ ░█░ ██▄ █▀▄ ▄█`
        ],
        containerStyle: {'margin': '0', "justify-content": "center"},
        textStyle: {"font-weight": "bolder", "padding-left": "20px", "font-size": "1em", "white-space": "break-spaces"}
    }
};

export const teletypeScreen = {
    id: 'terminal-screen',
    selector: 'kr-tele-type',
    data: null
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
            unit: 'pixel',
            sizes: ['*', 375],
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
            label: 'Order 2'
        }
    },
    {
        id: 'order-button-1',
        selector: 'kr-action-button',
        data: {
            action: 'UpsertComponentStates',
            props: appContent1,
            label: 'Order 1'
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

export const layouts: {[key: string]: any} = {
    "HOME": homePage,
    "ABOUT": aboutPage,
    "QUAD": quadPage
};
