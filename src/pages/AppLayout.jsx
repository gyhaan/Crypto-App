import { Outlet } from "react-router-dom";
import AppNav from "../UI/AppNav";
import Global from "../UI/Global";

function AppLayout() {
  return (
    <>
      <header>
        <Global />
        <div className="max-w-[1296px] mx-auto px-3">
          <AppNav />
        </div>
      </header>
      <main className="max-w-[1296px] mx-auto px-1 md:px-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
