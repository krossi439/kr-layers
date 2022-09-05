const ComponentSelectorMap = new Map<string, any>();

export interface LayoutComponent {
    selector: string;
    componentClass: any;
}

export function registerComponent(component: LayoutComponent) {
    ComponentSelectorMap.set(component.selector, component.componentClass);

    return (target: any) => {};
}

export function getComponent(selector: string) {
    return ComponentSelectorMap.get(selector);
}
