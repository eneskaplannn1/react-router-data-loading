import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid  h-screen grid-rows-[auto_1fr_auto] w-screen">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll overflow-x-hidden ">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
