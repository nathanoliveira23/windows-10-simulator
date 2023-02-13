import { WindowC, TitleBar, Content } from "./style";

import { MdHelp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io"
import { DefaultWindowButton } from "../DefaultWindowButtons";

import icon from "../../../assets/program.png"

export function Window() {
  return (
    <WindowC>
      <TitleBar>
        <div>
          <img src={icon} alt="icon" />
          <p>program</p>
        </div>
        <DefaultWindowButton />
      </TitleBar>
      <Content>
        
      </Content>
      
      {/* <Navigation>
        <nav>
          <a>File</a>
          <a>Home</a>
          <a>Share</a>
          <a>View</a>
        </nav>
        <div className="details">
          <IoIosArrowDown size={20} />
          <MdHelp color="blue" size={20} />
        </div>
      </Navigation> */}
    </WindowC>
  );
}