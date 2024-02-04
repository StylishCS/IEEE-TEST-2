import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../../../../../../../../../Shared/style/main-table.css";
import { Link } from "react-router-dom";
import AddPartnerModal from "./AddPartnerModal";
import EditPartnerModal from "./EditPartnerModal";
import axios from "axios";
import MainError from "../../../../../../../../../Shared/components/MainError";
const MainPartnersTable = ({
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
  const [selectedPartner, setSelectedPartner] = useState(null);

  const handleAddPartner = () => {
    setIsAddModalOpen(true);
  };

  const handleEditPartner = (partner) => {
    setSelectedPartner(partner);
    setIsEditModalOpen(true);
  };

  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:3000/partners/${id}`)
      .then((res) => {
        setErrorMsg("");
        setSuccessMsg("Partner deleted successfully.");
        data.length === 0
          ? setNotFoundMsg(
              "There is no partners, you can add one form add button."
            )
          : setNotFoundMsg("");
        refresh();
      })
      .catch((err) => {
        refresh();
        setSuccessMsg("");
        setErrorMsg("Cann't delete partner.");
      });
  };
  return (
    <>
      <div className={`main-table ${className}`}>
        <div className="table-header">
          <h1>Partners</h1>
          <button className="main-btn add-btn" onClick={handleAddPartner}>
            Add partners
          </button>
        </div>

        {notFoundMsg.length !== 0 ? (
          <MainError msg={notFoundMsg} className={"successMsg"} />
        ) : (
          <Table responsive striped hover bordered>
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
                    <td>
                      <div className="table-data">{index + 1}</div>
                    </td>
                    <td>
                      <div className="table-data">{el.name}</div>
                    </td>
                    <td>
                      <div className="table-data">
                        <div
                          className="table-img"
                          style={{ backgroundImage: `url(${el.image})` }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <div className="table-data">
                        <Link to={el.page_link}>Page Link</Link>
                      </div>
                    </td>
                    <td>
                      <div className="table-data">
                        <div className="action-btns">
                          <button
                            className="main-btn delete-btn"
                            onClick={() => {
                              handelDelete(el.id);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="main-btn edit-btn"
                            onClick={() => handleEditPartner(el)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>

      <AddPartnerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
        setNotFoundMsg={setNotFoundMsg}
      />

      <EditPartnerModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedPartner={selectedPartner}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
      />
    </>
  );
};

export default MainPartnersTable;
