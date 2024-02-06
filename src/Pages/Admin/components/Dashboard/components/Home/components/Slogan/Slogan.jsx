import React, { useState, useEffect } from "react";

import MainHeader from "./../../../../../../../../Shared/components/MainHeader";
import MainSloganTable from "./components/MainSloganTable";
import MainSuccess from "./../../../../../../../../Shared/components/MainSuccess";
import MainError from "../../../../../../../../Shared/components/MainError";
import "./style/slogan.css";
import http from "./../../../../../../../../Helper/http";
import MainSpinner from "../../../../../../../../Shared/components/MainSpinner";
export const Slogan = () => {
  const headers = ["Id", "Slogan", "Season", "Action"];

  const refreshTable = () => {
    setSlogans({ ...slogans, reload: slogans.reload + 1 });
  };
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState("");
  const [slogans, setSlogans] = useState({
    response: [],
    reload: 1,
    loading: false,
  });

  // get all slogans
  useEffect(() => {
    if (slogans.reload) {
      setSlogans({ ...slogans, loading: true });

      http
        .GET("https://ieee-backend-06597876c603.herokuapp.com/slogan")
        .then((res) => {
          console.log(res);
          setSlogans({
            ...slogans,
            loading: false,
            response: res.results,
          });
          setErrorMsg("");
        })
        .catch((err) => {
          setSlogans({
            ...slogans,
            loading: false,
          });
          setSuccessMsg("");
          slogans.response.length === 0 ? (
            setNotFoundMsg(
              "There is no slogans, you can add one from add button."
            )
          ) : (
            <></>
          );

          refreshTable();
        });
    }
  }, [slogans.reload]);
  return (
    <section className="slogan-section">
      <MainHeader
        title={"Our Slogan"}
        paragraph={"Here You can  update, and delete the season slogan."}
      />
      <div className="container">
        {/* error handling */}
        {successMsg.length !== 0 && errorMsg.length === 0 && (
          <MainSuccess msg={successMsg} className={"successMsg"} />
        )}
        {successMsg.length === 0 && errorMsg.length !== 0 && (
          <MainError msg={errorMsg} className={"successMsg"} />
        )}
        {slogans.loading && <MainSpinner className={"table-spinner"} />}
        {!slogans.loading && (
          <MainSloganTable
            headers={headers}
            data={slogans.response}
            className={"slogans-table"}
            refresh={refreshTable}
            setSuccessMsg={setSuccessMsg}
            setErrorMsg={setErrorMsg}
            setNotFoundMsg={setNotFoundMsg}
            notFoundMsg={notFoundMsg}
          />
        )}
      </div>
    </section>
  );
};
