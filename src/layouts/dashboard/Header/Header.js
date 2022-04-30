import Hamburger from "hamburger-react";
import cn from "classnames";

import { ReactComponent as IconLogo } from "../../../assets/icons/Logo.svg";
import SearchBar from "../../../components/SearchBar/SearchBar";
import classes from "./Header.module.scss";

const Header = ({ openBurger, setIsOpenBurger }) => {
  return (
    <div className={classes.root}>
      <div className={cn(classes.iconHeader, { "mb-0": openBurger })}>
        <IconLogo />
        <div className={classes.humburgerMenu}>
          <Hamburger toggled={openBurger} toggle={setIsOpenBurger} />
        </div>
      </div>

      <div className={cn(classes.searchBar, { [classes.close]: openBurger })}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
