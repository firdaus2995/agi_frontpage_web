export interface NavbarMenuItem {
  title: string;
  skipUrl?: boolean;
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
