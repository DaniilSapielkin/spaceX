import { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { setChooseCompany } from "../../redux/actions";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ companies, setChooseCompany }) => {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const customSelect = {
    components: {
      DropdownIndicator: () => null,
      IndicatorSeparator: () => null,
    },
    styles: {
      control: (base) => ({
        ...base,
        borderRadius: "8px",
        backgroundColor: "white",
        paddingLeft: "35px",
        height: "50px",
      }),
    },
  };
  const options = companies.map((company) => ({
    label: company.name,
    value: company.id,
  }));

  const handleChangeValue = (value) => {
    setValue(value);

    value && navigate(`/spaceX/info/${value.value}`, { replace: true });
  };

  return (
    <div className={classes.root}>
      <div className={classes.IconSearch}>
        <IconSearch />
      </div>
      <Select
        placeholder="Search"
        isClearable
        onChange={handleChangeValue}
        options={options}
        value={value}
        {...customSelect}
      />
    </div>
  );
};

const mapStateToProps = ({ Company: { companies } }) => ({
  companies,
});
const mapActionsToProps = { setChooseCompany };

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
