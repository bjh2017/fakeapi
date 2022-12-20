import _ from "lodash";

const Table = ({ data, columns }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th scope="col" key={col.path}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col) => (
              <td>{_.get(item, col.path) || col.content(item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
