import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

function DataTable(props) {
  return (
    <table className="result">
      <TableHeader />
      <TableBody
        items={props.results}
        initialInvestment={props.initialInvestment}
      />
    </table>
  );
}

export default DataTable;
