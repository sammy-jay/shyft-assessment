import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentHousehold } from "../../actions/infoActions";
import Chip from "../Chip/Chip";
import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.info.loading);
  const errorState = useSelector((state) => state.info.error);

  const householdData = useSelector((state) => state.info.householdData);

  const totalEnergy = Math.round(
    householdData?.attributes?.usage_data?.gen_usage_today +
      householdData?.attributes?.usage_data?.grid_usage_today
  );

  useEffect(() => {
    dispatch(getCurrentHousehold(10));
  }, []);

  if (loadingState) {
    return (
      <div className="loading">
        <h2>Fetching Data...</h2>
      </div>
    );
  }
  if (errorState) {
    return (
      <div className="loading">
        <h2>Oops, I did'nt get that...</h2>
      </div>
    );
  }

  return (
    <section className="main_section">
      <section className="main">
        <article className="articleOne">
          <div>
            <h6>
              <span>id:</span>{" "}
              {householdData?.id === "demo" ? 10 : householdData?.id}
            </h6>
            <h6>
              <span>address:</span> {householdData?.attributes?.address_1},{" "}
              {householdData?.attributes?.state}
            </h6>
          </div>
          <div>
            <h6 className="chip">{householdData?.attributes?.country}</h6>
          </div>
        </article>
        <article className="articleOne">
          <h6>
            <span>total energy usage:</span> {totalEnergy} unit(s)
          </h6>
        </article>
        <article className="articleTwo">
          <h5>Household installs</h5>
          <div>
            <Chip
              text="generator"
              color={`${
                householdData?.relationships.generator.data === null
                  ? "#ff564a"
                  : "#8dff63"
              }`}
            />
            <Chip
              text="inverter"
              color={`${
                householdData?.relationships.inverter.data === null
                  ? "#ff564a"
                  : "#8dff63"
              }`}
            />
            <Chip
              text="solar system"
              color={`${
                householdData?.relationships.solar_system.data === null
                  ? "#ff564a"
                  : "#8dff63"
              }`}
            />
          </div>
        </article>
      </section>
    </section>
  );
};

export default Main;
