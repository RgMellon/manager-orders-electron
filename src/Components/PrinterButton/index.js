import React, { useRef } from 'react';
import { Container, Frame } from './styles';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../ComponentToPrint';

class PrinterButton extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <div style={{ display: 'none' }}>
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default PrinterButton;
