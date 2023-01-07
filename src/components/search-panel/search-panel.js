import "./search-panel.css";

const SearchPanel = ({ employees, onExchenge }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={(e) => onExchenge(employees, e.target.value)}
    />
  );
};
export default SearchPanel;
