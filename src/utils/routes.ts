interface RouteTypes {
  component: string;
  href: string;
  name: string;
  icon: string;
}

export const ROUTES: { [key: string]: RouteTypes } = {
  home: {
    component: 'air-home',
    href: '/',
    name: 'Home',
    icon: 'home',
  },
  settings: {
    component: 'air-settings',
    href: '/settings',
    name: 'Settings',
    icon: 'settings',
  },
};
