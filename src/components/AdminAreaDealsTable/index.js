import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withSizes from 'react-sizes';
import isBrowser from 'is-browser';
import {
  SortingState,
  FilteringState,
  SearchState,
  IntegratedFiltering,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  SelectionState,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableFilterRow,
  TableColumnResizing,
  TableSelection,
  DragDropProvider, TableColumnReordering,
  Toolbar,
  SearchPanel,
  PagingPanel,
  ColumnChooser,
  TableColumnVisibility,
} from '@devexpress/dx-react-grid-material-ui';
import SelectFilterCell from '../../utils/backEndTableUtils/SelectFilterCell';
import { compareDate, compareNumber } from '../../utils/backEndTableUtils/tableSortingUtils';
import Cell from '../../utils/backEndTableUtils/DefaultVirtualTableCell';
import TableComponent from '../../utils/backEndTableUtils/TableComponent';
import TableContainerComponent from '../../utils/backEndTableUtils/TableContainerComponent';
import NoDataCellComponent from '../../utils/backEndTableUtils/NoDataCellComponent';


const styles = theme => ({
  root: {
    boxShadow: theme.shadows[1],
    backgroundColor: '#fff',
    borderRadius: '3px',
    '& [class^="Pager-pager-"]': {
      borderTop: '1px solid rgba(224, 224, 224, 1)',
    },
  },
  cell: {
    width: '100%',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  input: {
    width: '100%',
  },
  myTable: {

  },
  myTableContainer: {
    minHeight: '300px',
    height: 'calc(100vh - 310px) !important',
    // maxHeight: '800px',
  },
  myNoDataCellComponent: {
    borderBottom: 'none !important',
  },
});

const sortingStateColumnExtensions = [
  { columnName: 'dealID', sortingEnabled: false },
  { columnName: 'view', filteringEnabled: false },
];

const filteringStateColumnExtensions = [
  { columnName: 'view', filteringEnabled: false },
];

const getRowId = row => row.dealID;

const statusSelectInputItems = [
  { label: '' },
  { label: 'Pending' },
  { label: 'Approved' },
];

const FilterCell = props => {
  if (props.column.name === 'status') {
    return <SelectFilterCell selectInputItems={statusSelectInputItems} {...props} />;
  }
  return <TableFilterRow.Cell {...props} />;
};

const integratedSortingColumnExtensions = [
  { columnName: 'date', compare: compareDate },
  { columnName: 'rentOrSalePrice', compare: compareNumber },
  { columnName: 'deductionsTotal', compare: compareNumber },
  { columnName: 'paymentsTotal', compare: compareNumber },
  { columnName: 'netPaymentsTotal', compare: compareNumber },
];

const defaultColumnWidths = [
  { columnName: 'dealID', width: 120 },
  { columnName: 'date', width: 120 },
  { columnName: 'agentName', width: 120 },
  { columnName: 'agentType', width: 120 },
  { columnName: 'dealType', width: 120 },
  { columnName: 'clientName', width: 140 },
  { columnName: 'clientEmail', width: 140 },
  { columnName: 'propertyAddress', width: 140 },
  { columnName: 'propertyCity', width: 120 },
  { columnName: 'propertyState', width: 120 },
  { columnName: 'managementOrCobrokeCompany', width: 160 },
  { columnName: 'rentOrSalePrice', width: 110 },
  { columnName: 'deductionsTotal', width: 110 },
  { columnName: 'paymentsTotal', width: 110 },
  { columnName: 'netPaymentsTotal', width: 110 },
  { columnName: 'status', width: 120 },
  { columnName: 'view', width: 80 },
];

const defaultHiddenColumnNames = [
  'deductionsTotal',
  'paymentsTotal',
  'netPaymentsTotal',
  'propertyState',
  'clientEmail',
  'managementOrCobrokeCompany',
];

const pageSizes = [5, 10, 15, 20, 50, 100, 0];

const mapSizesToProps = ({ width }) => ({
  xsViewport: width < 412,
  smViewport: width < 600,
  mdViewport: width < 960,
  lgViewport: width < 1280,
});

@withStyles(styles)
@withSizes(mapSizesToProps)
class DealsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: 10,
      currentPage: 0,
      selection: [],
    };
  }

  componentDidMount() {
    if (this.props.onMount) this.props.onMount();
  }

  changePageSize = pageSize => {
    this.setState({ pageSize });
    if (this.state.pageSize < pageSize) {
      document.getElementById('myTableContainer').scrollTop = 0;
    }
  }

  currentPageChange = currentPage => {
    this.setState({ currentPage });
    document.getElementById('myTableContainer').scrollTop = 0;
  }

  changeSelection = selection => {
    this.setState({ selection });
  };

  render() {
    const { classes, columns, rows } = this.props;
    const { selection } = this.state;
    return (
      <div className={classes.root}>
        <Grid
          rows={rows}
          columns={columns}
          getRowId={getRowId}
        >
          <DragDropProvider />
          <SearchState />
          <FilteringState
            columnExtensions={filteringStateColumnExtensions}
          />
          <SortingState
            defaultSorting={[{ columnName: 'date', direction: 'desc' }]}
            columnExtensions={sortingStateColumnExtensions}
          />
          <SelectionState
            selection={selection}
            onSelectionChange={this.changeSelection}
          />
          <PagingState
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            onPageSizeChange={this.changePageSize}
            onCurrentPageChange={this.currentPageChange}
          />

          <IntegratedFiltering />

          <IntegratedSorting
            columnExtensions={integratedSortingColumnExtensions}
          />

          <IntegratedSelection />

          <IntegratedPaging />


          <VirtualTable
            height={isBrowser ? window.innerHeight - 310 : undefined}
            tableComponent={TableComponent}
            containerComponent={TableContainerComponent}
            cellComponent={Cell}
            noDataCellComponent={NoDataCellComponent}
          />
          <TableColumnReordering defaultOrder={columns.map(column => column.name)} />
          <TableColumnResizing
            defaultColumnWidths={defaultColumnWidths}
          />

          <TableFilterRow cellComponent={FilterCell} />
          <Toolbar />
          <SearchPanel />

          <TableColumnVisibility
            defaultHiddenColumnNames={defaultHiddenColumnNames}
          />
          <ColumnChooser />

          <TableHeaderRow showSortingControls />
          <TableSelection
            showSelectAll
            highlightRow
          />
          <PagingPanel
            pageSizes={pageSizes}
          />
        </Grid>
      </div>
    );
  }
}

export default DealsTable;
