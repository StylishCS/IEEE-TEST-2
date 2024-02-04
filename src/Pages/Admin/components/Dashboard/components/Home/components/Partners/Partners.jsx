/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style/partners.css";
import MainHeader from "./../../../../../../../../Shared/components/MainHeader";
import MainPartnersTable from "./components/MainPartnersTable";
import axios from "axios";
import MainSuccess from "./../../../../../../../../Shared/components/MainSuccess";
import MainError from "../../../../../../../../Shared/components/MainError";
export const Partners = () => {
  const headers = ["Id", "Name", "Image", "Link", "Action"];

  const refreshTable = () => {
    setPartners({ ...partners, reload: partners.reload + 1 });
  };
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState("");
  const [partners, setPartners] = useState({
    response: [],
    reload: 1,
    loading: false,
  });

  // get all partners
  useEffect(() => {
    if (partners.reload) {
      setPartners({ ...partners, loading: true });
      axios
        .get("http://localhost:3000/partners")
        .then((res) => {
          setPartners({
            ...partners,
            loading: false,
            response: res.data,
          });
          setErrorMsg("");
        })
        .catch((err) => {
          setPartners({
            ...partners,
            loading: false,
          });
          setSuccessMsg("");
          partners.response.length === 0 ? (
            setNotFoundMsg(
              "There is no partners, you can add one from add button."
            )
          ) : (
            <></>
          );

          refreshTable();
        });
    }
  }, [partners.reload]);

  return (
    <>
      <section className="partners-section">
        <MainHeader
          title={"Our Partners"}
          paragraph={"Here You can add, update, and delete any partner."}
        />
        <div className="container">
          {/* error handling */}
          {successMsg.length !== 0 && errorMsg.length === 0 && (
            <MainSuccess msg={successMsg} className={"successMsg"} />
          )}
          {successMsg.length === 0 && errorMsg.length !== 0 && (
            <MainError msg={errorMsg} className={"successMsg"} />
          )}

          <MainPartnersTable
            headers={headers}
            data={partners.response}
            className={"partners-table"}
            refresh={refreshTable}
            setSuccessMsg={setSuccessMsg}
            setErrorMsg={setErrorMsg}
            setNotFoundMsg={setNotFoundMsg}
            notFoundMsg={notFoundMsg}
          />
          
        </div>
      </section>
    </>
  );
};
