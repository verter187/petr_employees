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
      found: [],
    };
  }

  setEmployees = (employees) => {
    this.setState({ employees: employees });
  };

  setfound = (found) => {
    this.setState({ found: found });
  };

  componentDidMount = () => {
    getEmployees(this.setEmployees);
  };

  searchEmployees = (employees, term) => {
    if (term.length === 0) {
      return employees;
    }
    term = term.toLowerCase();
    const found = employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(term) ||
        employee.lastname.toLowerCase().includes(term)
      );
    });
    this.setEmployees(found);
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
        <AppInfo employees={this.state.employees} />

        <div className="search-panel">
          <SearchPanel
            employees={this.state.employees}
            onExchenge={this.searchEmployees}
          />
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
