export interface GlobalState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  exitMenu: () => void;
}

export interface ServiceData {
  headline: string;
  description: string;
  image: string;
}
