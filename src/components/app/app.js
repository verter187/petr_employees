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
      term: "",
      filter: "all",
    };
  }

  setEmployees = (employees) => {
    this.setState({ employees: employees });
  };

  componentDidMount = () => {
    getEmployees(this.setEmployees);
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    term = term.toLowerCase();
    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(term) ||
        item.lastname.toLowerCase().includes(term)
      );
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.promotion);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter: filter });
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
    let { employees, term, filter } = this.state;
    const visibleData = this.filterPost(
      this.searchEmp(employees, term),
      filter
    );
    return (
      <div className="app">
        <AppInfo employees={employees} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          employees={visibleData}
          onDelete={this.deleteEmployeeFromList}
          onUpdate={this.updateEmployeeInList}
        />
        <EmployeesAddForm onCreate={this.createEmployeeInList} />
      </div>
    );
  }
}

export default App;
