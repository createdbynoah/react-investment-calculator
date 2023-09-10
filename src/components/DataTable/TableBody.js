const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function TableBody(props) {
  let totalInterest = 0;
  let totalContributions = 0;
  return (
    <tbody>
      {props.items.map((item) => {
        return (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>
              {formatter.format(
                item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + item.yearlyContribution * item.year
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
