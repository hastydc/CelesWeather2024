import { RoutePath } from '../enums/routePath.enum';

/**
 * Menu item
 */
export interface MenuItem {
  /** label */
  label: string;

  /** link */
  link: RoutePath;

  /** icon */
  icon: any;
}
