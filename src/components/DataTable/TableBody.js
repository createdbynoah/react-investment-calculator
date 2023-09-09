function TableBody(props) {
  let totalInterest = 0;
  let totalContributions = 0;
  return (
    <tbody>
      {props.items.map((item) => {
        totalInterest += item.yearlyInterest;
        totalContributions += item.yearlyContribution;
        return (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>$ {item.savingsEndOfYear.toFixed(2)}</td>
            <td>$ {item.yearlyInterest.toFixed(2)}</td>
            <td>$ {totalInterest.toFixed(2)}</td>
            <td>$ {totalContributions}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
