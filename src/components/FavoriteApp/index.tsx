import { App } from "./style";

interface FavoriteAppProps {
  logo: string;
  title: string;
}

export function FavoriteApp({ logo, title } : FavoriteAppProps) {
  return (
    <App>
      <img src={logo} />
      {title}
    </App>
  );
}