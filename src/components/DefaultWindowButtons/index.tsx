import { WndButtons } from "./style";

import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from "react-icons/vsc";

export function DefaultWindowButton() {
  return (
    <WndButtons>
      <button>
        <VscChromeMinimize size={18} />
      </button>
      <button>
        <VscChromeMaximize size={18} />
      </button>
      <button>
        <VscChromeClose size={18} />
      </button>
    </WndButtons>
  );
}