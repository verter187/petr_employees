import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../../requests";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  setEmployees = (employees) => {
    this.setState({ employees: employees });
  };

  componentDidMount = () => {
    getEmployees(this.setEmployees);
  };

  createEmployeeInList = (employee) => {
    createEmployee(JSON.stringify({ ...employee })).then(() =>
      getEmployees(this.setEmployees)
    );
  };

  deleteEmployeeFromList = (id) => {
    deleteEmployee(JSON.stringify({ id: id })).then(() =>
      getEmployees(this.setEmployees)
    );
  };

  updateEmployeeInList = (employee) => {
    updateEmployee(JSON.stringify({ ...employee })).then(() =>
      getEmployees(this.setEmployees)
    );
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          employees={this.state.employees}
          onDelete={this.deleteEmployeeFromList}
          onUpdate={this.updateEmployeeInList}
        />
        <EmployeesAddForm onCreate={this.createEmployeeInList} />
      </div>
    );
  }
}

export default App;
