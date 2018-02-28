import React, {PropTypes, Component} from 'react'
import {Grid} from 'react-virtualized'
// import uuid from 'node-uuid'

import {DASHBOARD_LAYOUT_ROW_HEIGHT} from 'shared/constants'

class TableGraph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data || [
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
        [
          2,
          3,
          4,
          5,
          6,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
        ],
      ],
    }
  }

  cellRenderer = ({columnIndex, key, rowIndex, style}) => {
    const {data} = this.state
    return (
      <div key={key} style={style}>
        {data[columnIndex][rowIndex]}
      </div>
    )
  }
  render() {
    const {data} = this.state
    const {cellHeight} = this.props
    const columnCount = data[0].length
    const rowCount = data.length
    const COLUMN_WIDTH = 50
    const ROW_HEIGHT = 50
    const tableWidth = this.gridContainer ? this.gridContainer.clientWidth : 400
    const tableHeight = cellHeight * DASHBOARD_LAYOUT_ROW_HEIGHT - 64

    return (
      <div
        className="graph-container"
        ref={gridContainer => (this.gridContainer = gridContainer)}
      >
        <Grid
          cellRenderer={this.cellRenderer}
          columnCount={columnCount}
          columnWidth={COLUMN_WIDTH}
          height={tableHeight}
          rowCount={rowCount}
          rowHeight={ROW_HEIGHT}
          width={tableWidth - 32}
        />
      </div>
    )
  }
}

export default TableGraph
