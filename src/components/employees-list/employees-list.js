import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ employees, onCreate, onDelete, onUpdate }) => {
  return (
    <ul className="app-list list-group">
      {employees.map((item) => (
        <EmployeesListItem
          key={item.id}
          {...item}
          onDelete={() => onDelete(item.id)}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
