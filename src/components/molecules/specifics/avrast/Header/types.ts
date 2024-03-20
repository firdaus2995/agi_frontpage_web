export interface NavbarMenuItem {
  title: string;
  content: NavbarMenuItemContent[];
}

export interface NavbarMenuItemContent {
  title: string;
  subMenus: NavbarSubMenus[];
}

export interface NavbarSubMenus {
  title: string;
  icon: number;
  listMenu?: string[];
}
