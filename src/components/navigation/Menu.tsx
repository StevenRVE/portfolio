import ContactButton from "../buttons/ContactButton";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <>
      <MenuItem title={"About"} />
      <MenuItem title={"Projects"} />
      <MenuItem title={"Services"} />
      <ContactButton title={"Contact"} />
    </>
  );
};
export default Menu;
