export interface NavbarMenuItem {
  title: string;
  content: NavbarMenuItemContent;
}

export interface NavbarMenuItemContent {
  title: string;
  description: string;
  buttonTitle: string;
  subMenus: string[];
  imageSource: number;
}
