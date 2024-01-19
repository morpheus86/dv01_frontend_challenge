import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions, getAllDatas } from "../../store/dataSlice";
import DropDown from "../UI/DropDown";

const DropDownFilter = () => {
  const { groups } = useSelector((state) => state.data);
  const { homeOwnership, term, quarter, year } = groups;
  const dispatch = useDispatch();

  // I am using useRef to access the element in select, then forwarding it to the store where the filterData function will handle the business logic

  const homeOwnershipRef = useRef();
  const quarterRef = useRef();
  const termRef = useRef();
  const yearRef = useRef();

  const handleSelectOption = () => {
    const homeOwnerShipselected = homeOwnershipRef.current.value;
    const quarterSelected = quarterRef.current.value;
    const termSelected = termRef.current.value;
    const yearSelected = yearRef.current.value;

    const prepDataToSendForFiltering = {
      homeOwnership:
        homeOwnerShipselected === "Home OwnerShip" ? "" : homeOwnerShipselected,
      year: yearSelected === "Year" ? "" : yearSelected,
      quarter: quarterSelected === "Quarter" ? "" : quarterSelected,
      term: termSelected === "Term" ? "" : termSelected,
    };

    dispatch(dataActions.filterData(prepDataToSendForFiltering));
  };
  // This will reset the UI to default value but also get the latest data from our backend and recalculate the aggregateTotal
  const handleResetDropDown = () => {
    dispatch(getAllDatas());
    homeOwnershipRef.current.value = "Home OwnerShip";
    quarterRef.current.value = "Quarter";
    termRef.current.value = "Term";
    yearRef.current.value = "Year";
  };
  return (
    <div className="dropDown_container">
      <DropDown
        title="Home OwnerShip"
        options={homeOwnership}
        ref={homeOwnershipRef}
        option={handleSelectOption}
      />
      <DropDown
        title="Quarter"
        options={quarter}
        ref={quarterRef}
        option={handleSelectOption}
      />
      <DropDown
        title="Term"
        options={term}
        ref={termRef}
        option={handleSelectOption}
      />
      <DropDown
        title="Year"
        options={year}
        ref={yearRef}
        option={handleSelectOption}
      />
      <button onClick={handleResetDropDown}>Reset</button>
    </div>
  );
};

export default DropDownFilter;
