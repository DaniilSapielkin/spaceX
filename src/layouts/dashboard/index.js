import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = () => {
  const [isOpenMenuBurger, setIsOpenMenuBurger] = useState(false);

  return (
    <div className="root_app">
      <Header
        openBurger={isOpenMenuBurger}
        setIsOpenBurger={setIsOpenMenuBurger}
      />
      <div className="root_main">
        <Sidebar
          isOpenSidebar={isOpenMenuBurger}
          setIsOpenSidebar={setIsOpenMenuBurger}
        />
        <div className="root_main_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
