import React from 'react';

import { IIcon } from '.';
import IconSVG from '@/svgs';

const iconType = {
  search: IconSVG.Search,
  helpcircle: IconSVG.HelpCircle,
  mail: IconSVG.Mail,
  homeIcon: IconSVG.HomeIcon,
  hamburgerMenuIcon: IconSVG.HamburgerMenuIcon,
  linkedInIcon: IconSVG.LinkedInIcon,
  tiktokIcon: IconSVG.TiktokIcon,
  instaIcon: IconSVG.InstaIcon,
  facebookIcon: IconSVG.FacebookIcon,
  playIcon: IconSVG.PlayIcon,
  arrowRightIcon: IconSVG.ArrowRightIcon,
  chevronRight: IconSVG.ChevronRight,
  close: IconSVG.Close,
  clock: IconSVG.Clock,
  alertCircle: IconSVG.AlertCircle,
  polygon: IconSVG.Polygon,
  sealWarning: IconSVG.SealWarning,
  calendarIcon: IconSVG.CalendarIcon,
  downloadIcon: IconSVG.DownloadIcon,
  copyUrl: IconSVG.CopyUrl,
  share: IconSVG.Share,
  fileIcon: IconSVG.FileIcon,
  globeIcon: IconSVG.GlobeIcon,
  keyIcon: IconSVG.KeyIcon,
  magnifyingGlassIcon: IconSVG.MagnifyingGlass,
  xcrossIcon: IconSVG.XCrossIcon,
  roundedPlus: IconSVG.RoundedPlus,
  roundedX: IconSVG.RoundedX,
  calculatorIcon: IconSVG.CalculatorIcon,
  discountIcon: IconSVG.DiscountIcon,
  multiPeopleIcon: IconSVG.MultiPeopleIcon,
  roundedQuestion: IconSVG.RoundedQuestion,
  award: IconSVG.Award,
  heart: IconSVG.Heart,
  eye: IconSVG.Eye,
  newspaper: IconSVG.Newspaper,
  chevronDown: IconSVG.ChevronDown,
  youtubeIcon: IconSVG.YoutubeIcon,
  UploadIcon: IconSVG.UploadIcon,
  chevronLeft: IconSVG.ChevronLeft,
  lightBulb: IconSVG.LightBulb,
  shoppingCart: IconSVG.ShoppingCart,
  externalLink: IconSVG.ExternalLink,
  navigation: IconSVG.Navigation,
  maps: IconSVG.Maps,
  phone: IconSVG.Phone,
  mapsPin: IconSVG.MapsPin,
  briefcase: IconSVG.Briefcase
} as const;

type IconsListType = keyof typeof iconType;
export type { IconsListType as IconsList };

const mapIcon = (props: IIcon) => {
  const Icon = iconType[props.name];

  if (!Icon) return undefined;

  return <Icon {...props} />;
};

export default mapIcon;
