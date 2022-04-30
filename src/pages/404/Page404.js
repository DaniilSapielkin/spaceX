import { Link } from "react-router-dom";
import classes from "./Page404.module.scss";

export const Page404 = () => {
  return (
    <div className={classes.root}>
      Sorry, page not found!
      <Link to="/" className={classes.link}>
        Go to Home
      </Link>
    </div>
  );
};
