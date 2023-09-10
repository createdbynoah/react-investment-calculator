import React from 'react';

import classes from './DataTable.module.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function DataTable(props) {
  return (
    <table className={classes.result}>
      <TableHeader />
      <TableBody
        items={props.results}
        initialInvestment={props.initialInvestment}
      />
    </table>
  );
}

export default DataTable;
