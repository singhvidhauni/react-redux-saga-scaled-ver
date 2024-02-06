import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../actions/employeeActions";

import { useNavigate } from "react-router-dom";
const DeleteEmployeeContainer = ({
  deleteEmployee,
  employees,
  deleteDataSuccess,
}) => {
  const [showDeleteRecordPanel] = useState(true);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (employees.error) {
      setShowErrorMessage(true);
      setDeleteSuccess(false);
    }
    if (employees.status && id !== "") {
      setShowErrorMessage(false);
      setDeleteSuccess(true);
    }
    return () => {
      setDeleteSuccess(false);
    };
  }, [employees, id]);

  useEffect(() => {
    if (deleteDataSuccess) {
      navigate("/");
    }
  }, [deleteDataSuccess, navigate]);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteEmployee(id);
  };
  const handleInputChange = (e) => {
    setId(e.target.value);
    setShowErrorMessage(false);
    setDeleteSuccess(false);
  };

  return (
    <div className="delete-emp-outline">
      {employees.error && showErrorMessage && (
        <div className="ui message error">
          <h3>Delete record</h3>
          <div className="header">Access Error</div>
          <p>{`The record with id ${id} couldn't be found`}</p>
        </div>
      )}
      {employees.status && deleteSuccess && (
        <div className="ui message success">
          <p>{`The record with id ${id} successfully deleted`}</p>
        </div>
      )}
      {showDeleteRecordPanel && (
        <form className="ui form" onSubmit={(e) => handleDelete(e)}>
          <div className="field">
            <label>Please enter the Id of the record to Delete.</label>
            <input type="text" onChange={(e) => handleInputChange(e)} />
          </div>
          <button className="ui secondary button">Submit</button>
        </form>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    employees: state.delEmp.employees,
    deleteDataSuccess: state.crudStatus.isSuccess,
  };
};
export default connect(mapStateToProps, {
  deleteEmployee,
})(DeleteEmployeeContainer);
