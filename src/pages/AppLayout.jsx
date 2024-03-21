import { Outlet } from "react-router-dom";
import AppNav from "../UI/AppNav";
import Global from "../UI/Global";
import Carousel from "../UI/Slider";

function AppLayout() {
  return (
    <>
      <header>
        <Global />
        <div className="max-w-[1296px] mx-auto">
          <AppNav />
        </div>
      </header>
      <main className="max-w-[1296px] mx-auto">
        <Carousel />
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
