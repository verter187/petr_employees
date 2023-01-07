import { Component } from "react";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.onCreate = props.onCreate;
    this.state = {
      name: "",
      lastname: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, lastname, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Имя"
            name="name"
            value={name}
            required
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Фамилия"
            name="lastname"
            value={lastname}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            onClick={(e) => {
              e.preventDefault();

              this.onCreate({
                name: name,
                lastname: lastname,
                salary: salary,
                increase: false,
                promotion: false,
              });
            }}
            type="submit"
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
