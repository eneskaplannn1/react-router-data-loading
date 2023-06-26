import { Link, useNavigation } from "react-router-dom";

function Header() {
  
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
