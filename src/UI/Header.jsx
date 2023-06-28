import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-300 px-8 uppercase flex justify-between items-center h-[80px]">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName  />
    </header>
  );
}

export default Header;
