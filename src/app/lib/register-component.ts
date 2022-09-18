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
    if (ComponentSelectorMap.has(selector)) {
        return ComponentSelectorMap.get(selector);
    }
    else {
        throw new Error(`Could not get component for ${selector}`);
    }
}
