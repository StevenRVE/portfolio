export interface GlobalState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  toggleMenu: () => void;
  toggleModal: () => void;
  exitMenu: () => void;
  exitModal: () => void;
}
