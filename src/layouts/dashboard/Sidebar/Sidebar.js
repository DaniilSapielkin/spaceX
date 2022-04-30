import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { getCompanyData, setChooseCompany } from "../../../redux/actions";
import Loader from "../../../components/Loader/Loader";
import classes from "./Sidebar.module.scss";

const Sidebar = ({
  setChooseCompany,
  companies,
  getCompanyData,
  isOpenSidebar,
  setIsOpenMenuBurger,
}) => {
  useEffect(() => {
    getCompanyData();
  }, []);

  const handleChoose = (id) => {
    setChooseCompany(id);
    isOpenSidebar && setIsOpenMenuBurger(false);
  };

  return (
    <div className={cn(classes.root, { [classes.openSideBar]: isOpenSidebar })}>
      <div className={classes.header}>SHIPMENT LIST</div>
      <div className={classes.listContainer}>
        {companies.length ? (
          companies.map((company) => (
            <div key={company.id}>
              <NavLink
                className={({ isActive }) =>
                  cn(classes.listItem, {
                    [classes.listItemActive]: isActive,
                  })
                }
                to={`/info/${company.id}`}
                onClick={() => handleChoose(company.id)}
              >
                {company.name}
              </NavLink>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ Company: { companies }, chooseCompany }) => ({
  companies,
  chooseCompany,
});

const mapActionsToProps = { getCompanyData, setChooseCompany };

export default connect(mapStateToProps, mapActionsToProps)(Sidebar);
