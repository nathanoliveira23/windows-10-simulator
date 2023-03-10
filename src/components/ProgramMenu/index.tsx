import { ReactElement } from "react";
import { Container } from "./style";

interface ProgramMenuProps {
  icon: ReactElement;
  title: string;
}

export function ProgramMenu({ icon, title } : ProgramMenuProps) {
  return (
    <Container>
      <div>
        {icon}
      </div>
      {title}
    </Container>
  );
}