import classes from "./DashbordPage.module.scss";
import { ReactComponent as IconLogo } from "../../assets/icons/Logo.svg";

const DashboardPage = () => {
  return (
    <div className={classes.root}>
      <IconLogo />
      <div className={classes.header}>Welcome to the SpaceX !</div>
    </div>
  );
};

export default DashboardPage;
