import "./app-info.css";
const AppInfo = ({ employees }) => {
  const increased = employees.filter((item) => item.increase);
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employees.length}</h2>
      <h2>Премию получат: {increased.length}</h2>
    </div>
  );
};

export default AppInfo;
