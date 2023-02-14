import { Controls, GridApp, MenuC, Programs } from "./style";

import { FiPower, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import { TaskBarItens } from "../TaskBarItens";
import { ProgramsList } from "../ProgramsList";
import { FavoriteApp } from "../FavoriteApp";

import chrome from "../../../assets/chrome.svg";
import brave from "../../../assets/brave.svg";

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

      <GridApp>
        <FavoriteApp logo={chrome} title="Chrome" />
        <FavoriteApp logo={brave} title="Brave" />
        <FavoriteApp logo={brave} title="Brave" />
        <FavoriteApp logo={brave} title="Brave" />
        <FavoriteApp logo={brave} title="Brave" />
        <FavoriteApp logo={brave} title="Brave" />
        <FavoriteApp logo={brave} title="Brave" />
      </GridApp>
    </MenuC>
  );
}