import "./employees-list-item.css";

const EmployeesListItem = ({
  id,
  name,
  lastname,
  salary,
  onDelete,
  onUpdate,
  increase,
  promotion,
}) => {
  const liClasses = `list-group-item d-flex justify-content-between ${
    increase ? "increase" : ""
  } ${promotion ? "like" : ""}`;

  return (
    <li id={id} className={liClasses}>
      <span
        className="list-group-item-label"
        onClick={() => onUpdate({ id: id, promotion: !promotion })}
        // style={{
        //   fontSize: "40px",
        //   color: "red",
        //   transition: "all",
        //   WebkitTransition: "all",
        //   msTransition: "all",
        // }}
      >
        {name + " " + lastname}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={() => onUpdate({ id: id, increase: !increase })}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
