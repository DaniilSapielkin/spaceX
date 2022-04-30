import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import classes from "./InfoCompany.module.scss";

export const InfoCompany = () => {
  const [currentCompany, setCurrentCompany] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const company = useSelector(({ Company: { chooseCompany, companies } }) => ({
    chooseCompany,
    companies,
  }));

  const curentCompanyId = location.pathname.split("/").pop();

  useEffect(() => {
    if (company.chooseCompany.id === curentCompanyId) {
      setCurrentCompany(company.chooseCompany);
    } else {
      if (company.companies.length) {
        const companyC = company.companies.find(
          (company) => company.id === curentCompanyId
        );

        companyC
          ? setCurrentCompany(companyC)
          : navigate("../404", { replace: true });
      }
    }
  }, [location.pathname, company.companies, company.chooseCompany]);

  const countCargoBoxs = (value) => {
    const countArray = (arr) => {
      let x = 0;
      return arr.map((i) => (x += i), x).reverse()[0];
    };

    return Math.ceil(
      countArray(value.split(",").map((value) => Number(value))) / 10
    );
  };

  return (
    <div className={classes.root}>
      {currentCompany ? (
        <>
          <div className={classes.headerName}>
            {currentCompany.name}
            <div className={classes.email}>{currentCompany.email}</div>
          </div>
          <div className="text-secondary">CARGO BOXES</div>
          <div className={classes.cargoBox}>
            {currentCompany.boxes || "No box"}
          </div>

          {currentCompany.boxes && (
            <>
              <div className={classes.reqNumber}>
                Number of required cargo bays
              </div>
              <div className={classes.cargoBays}>
                {countCargoBoxs(currentCompany.boxes)}
              </div>
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
