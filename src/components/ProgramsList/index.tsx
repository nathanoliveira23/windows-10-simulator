import { ProgramMenu } from "../ProgramMenu";
import { Programs } from "./style";

import { FaCalendarAlt, FaCalculator } from "react-icons/fa";

export function ProgramsList() {
  return (
    <Programs>
        <div>
          <h1>C</h1>
        </div>
        <div className="programs">
          <ProgramMenu icon={<FaCalendarAlt size={30} />} title="Calendario" />
          <ProgramMenu icon={<FaCalculator size={30} />} title="Calculadora" />
        </div>
    </Programs>
  );
}