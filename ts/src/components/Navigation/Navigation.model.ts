export interface NavigationProps {
  locale: string;
  currentTheme: string;
  changeLocale:(locale: string) => void;
  changeTheme: (theme: string) => void;
}