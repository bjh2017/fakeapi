import _ from "lodash";

const Table = ({ data, columns }) => {
  return (
    <table class="table">
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
        {data.map((d) => (
          <tr key={d.id}>
            {columns.map((col) => (
              <td>{_.get(d, col.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
