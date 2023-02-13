import { ReactElement } from "react";
import { Itens } from "./style";

interface TaskBarItensProps {
  item: ReactElement | string | JSX.Element;
}

export function TaskBarItens({ item } : TaskBarItensProps) {
  return (
    <Itens>
      {item}
    </Itens>
  );
}