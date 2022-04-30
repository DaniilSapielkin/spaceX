import ClipLoader from "react-spinners/ClipLoader";
import classes from "./Loader.module.scss";

const params = {
  color: "#fff",
  css: classes.loader,
  loading: true,
  size: 30,
};

const Loader = () => (
  <div className={classes.root}>
    <ClipLoader {...params} />
  </div>
);

export default Loader;
