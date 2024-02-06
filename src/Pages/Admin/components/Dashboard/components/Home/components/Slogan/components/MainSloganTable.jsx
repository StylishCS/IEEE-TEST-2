import React, { useState } from "react";
import "../../../../../../../../../Shared/style/main-table.css";
import AddSloganModal from "./AddSloganModal";
import EditSloganModal from "./EditSloganModal";
import axios from "axios";
import MainError from "../../../../../../../../../Shared/components/MainError";
import http from "../../../../../../../../../Helper/http";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
const MainSloganTable = ({
  headers,
  data,
  className,
  refresh,
  setSuccessMsg,
  setErrorMsg,
  setNotFoundMsg,
  notFoundMsg,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSlogan, setSelectedSlogan] = useState(null);
  const [loading, setLoading] = useState({ loading: false, id: "" });
  const handleAddSlogan = () => {
    setIsAddModalOpen(true);
  };

  const handleEditSlogan = (slogan) => {
    setSelectedSlogan(slogan);
    setIsEditModalOpen(true);
  };

  const handelDelete = (id) => {
    setLoading({ ...loading, loading: true, id: id });
    http
      .DELETE(`https://ieee-backend-06597876c603.herokuapp.com/slogan/${id}`)
      .then((res) => {
        setErrorMsg("");
        setSuccessMsg("Slogan deleted successfully.");
        setLoading({ ...loading, loading: false, id: id });
        data.length === 0
          ? setNotFoundMsg(
              "There is no slogans, you can add one form add button."
            )
          : setNotFoundMsg("");
        refresh();
      })
      .catch((err) => {
        refresh();
        setSuccessMsg("");
        setErrorMsg("Cann't delete slogan.");
        setLoading({ ...loading, loading: false, id: id });
      });
  };
  return (
    <>
      <div className={`main-table ${className}`}>
        <div className="table-header">
          <h1>Slogans</h1>
          <button className="main-btn add-btn" onClick={handleAddSlogan}>
            Add slogans
          </button>
        </div>

        {notFoundMsg.length !== 0 ? (
          <MainError msg={notFoundMsg} className={"successMsg"} />
        ) : (
          <table>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => {
                return (
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>{el.body}</td>
                    <td>{el.season}</td>
                    <td>
                      <div className="action-btns">
                        <button
                          className="main-btn delete-btn"
                          onClick={() => {
                            handelDelete(el._id);
                          }}
                        >
                          {loading.loading && el._id === loading.id && (
                            <MainSpinner />
                          )}
                          {el._id !== loading.id && "Delete"}
                        </button>
                        <button
                          className="main-btn edit-btn"
                          onClick={() => handleEditSlogan(el)}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <AddSloganModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
        setNotFoundMsg={setNotFoundMsg}
      />

      <EditSloganModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedSlogan={selectedSlogan}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
      />
    </>
  );
};

export default MainSloganTable;
