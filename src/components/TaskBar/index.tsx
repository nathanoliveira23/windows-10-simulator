import { Container, Content } from "./style";
import { TaskBarItens } from "../TaskBarItens";

import { AiOutlineWifi } from "react-icons/ai";
import { ImVolumeHigh } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";

import { BsWindows } from "react-icons/bs";
import edge from "../../../assets/edge.svg";

export function TaskBar() {
  return (
    <Container>
      <Content>
        <div>
          <TaskBarItens item={<BsWindows size={26} color="white" />} />
          <TaskBarItens item={<img src={edge} />} />
        </div>
        <div>
          <TaskBarItens item={<IoIosArrowUp size={20} color="white" />} />
          <TaskBarItens item={<ImVolumeHigh size={16} color="white" />} />
          <TaskBarItens item={<AiOutlineWifi size={18} color="white" />} />
          <TaskBarItens item="ENG" />
          <TaskBarItens item="10:30" />
        </div>
      </Content>
    </Container>
  );
}