import React, { Component } from 'react';
import './Demo-children-Ex.css'

class ModalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }
  render() {
    const { title, children } = this.props;
    return (
      <div className="modalReport">
        <div className="Header">
          <h3 className="title">{title}</h3>
          <a href="#1" className="viewAll">View All </a>
        </div>

        <div className="Middle">
          <div className="cashDiposits">
            <div href="#1" className="cashCircle"></div>
            <div className="cashContent">
              <p className="cashTitle">{children}</p>
              <h1>1.7M</h1>
              <span>54.1% less earnings</span>
            </div>
          </div>
          <div className="cashDiposits">
            <div href="#1" className="cashCircle"></div>
            <div className="cashContent">
              <p className="cashTitle">{children}</p>
              <h1>1.7M</h1>
              <span>54.1% less earnings</span>
            </div>
          </div>
          <div className="cashDiposits">
            <div href="#1" className="cashCircle"></div>
            <div className="cashContent">
              <p className="cashTitle">{children}</p>
              <h1>1.7M</h1>
              <span>54.1% less earnings</span>
            </div>
          </div>
        </div>

        <div className="Footer">
        <a href="#2" className="viewCompleteReport">View Complete Report </a>
        </div>
      </div>
    )
  }
}

export default ModalReport;
