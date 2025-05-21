export type menuDirection = 'row' | 'column'

export interface menuItem {
  name: string
  icon?: string
  children?: menuItem[]
  path?: string
}

export type MenuData = menuItem[]


export interface MenuProps {
  menuData: MenuData
  direction?: menuDirection
}