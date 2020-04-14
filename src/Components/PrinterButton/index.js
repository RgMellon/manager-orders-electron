import React, { useRef } from 'react';
import { connect } from 'react-redux';

import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../ComponentToPrint';

class PrinterButton extends React.Component {
  componentDidMount() {
    console.log(this.props.orderDetail, 'sdpfds');
  }

  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <a
              href="#"
              style={{
                background: '#999',
                padding: 15,
                color: '#fff',
                borderRadius: 8,
              }}
            >
              Imprimir
            </a>
          )}
          content={() => this.componentRef}
        />
        <div style={{ display: 'none' }}>
          <ComponentToPrint
            orderDetail={this.props.orderDetail}
            ref={el => (this.componentRef = el)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderDetail: state.orders.orderDetail,
});

export default connect(mapStateToProps)(PrinterButton);
// export default PrinterButton;
