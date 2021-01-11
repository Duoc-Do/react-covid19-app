import React, { Fragment } from "react";

const CountryTotalAllStatus = ({ allStatus }) => {
  const allStatusItems = allStatus.length;
  if (allStatusItems === 0) {
    return (
      <div>
        <h3>Loading data...</h3>
      </div>
    );
  }

  const renderAllStatus = allStatus.map(
    ({ Country, Confirmed, Recovered, Deaths }, i) => {
      if (allStatusItems === i + 1) {
        return (
          <Fragment key={i}>
            <h3>Country and Status: {Country}</h3>
            <div className="ui large statistics">
              <div className="ui red statistic">
                <div className="value">{Confirmed}</div>
                <div className="label">Cases</div>
              </div>
              <div className="ui blue statistic">
                <div className="value">{Recovered}</div>
                <div className="label">Recovered</div>
              </div>
              <div className="ui grey statistic">
                <div className="value">{Deaths}</div>
                <div className="label">Deaths</div>
              </div>
            </div>
          </Fragment>
        );
      }
    }
  );
  return <div>{renderAllStatus}</div>;
};

export default CountryTotalAllStatus;
