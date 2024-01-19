import { useSelector } from "react-redux";

/**
 *
 * 1. Create a table (reference `./wireframe/Table.png`), where each column is the unique grade value in the data and the first row is the total aggregation of the current balance for each grade.
 * We are getting our data directly from our store, so we dont need to do anything on the component aside from showing data
 */

const TableContent = () => {
  // Getting state
  const { aggregateTotal, gradeGroups } = useSelector((state) => state.data);
  return (
    <table border="1">
      <thead>
        <tr>
          {gradeGroups.map((group) => (
            <th key={group}>{`Grade ${group}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {aggregateTotal.map((totalPerGrade, idx) => (
            <td key={idx}>{totalPerGrade.toFixed(2)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TableContent;
