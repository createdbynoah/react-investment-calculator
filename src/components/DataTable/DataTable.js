import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

function DataTable(props) {
  return (
    <table className="result">
      <TableHeader />
      <TableBody items={props.results} />
    </table>
  );
}

export default DataTable;
