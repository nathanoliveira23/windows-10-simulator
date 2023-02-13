import { Controls, MenuC, Programs } from "./style";

import { FiPower, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import { TaskBarItens } from "../TaskBarItens";
import { ProgramsList } from "../ProgramsList";

export function Menu() {
  return (
    <MenuC>
      <Controls>
        <div>
          <TaskBarItens item={<RxHamburgerMenu size={30} color="#FFF" />} />
        </div>
        <div>
          <TaskBarItens item={<CgProfile size={30} color="#FFF" />} />
          <TaskBarItens item={<FiSettings size={30} color="#FFF" />} />
          <TaskBarItens item={<FiPower size={30} color="#FFF" />} />
        </div>
      </Controls>

      <Programs>
        <ProgramsList />
        <ProgramsList />
      </Programs>
    </MenuC>
  );
}