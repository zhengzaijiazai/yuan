export interface MenuItem {
    name: string;
    icon: string;
    path: string;
    children?: MenuItem[];
    isLeaf?: boolean;
}

export type MenuData = MenuItem[];


export interface PropsType {
    menuData: MenuData;
}