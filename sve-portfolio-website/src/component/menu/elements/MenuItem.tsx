import { useGlobalState } from "@/contexts/GlobalStateContext";

const MenuItem = ({ title }: { title: string }) => {
  const { exitMenu } = useGlobalState();

  return (
    <a href={"/#" + title} onClick={exitMenu}>
      {title}
    </a>
  );
};

export default MenuItem;
