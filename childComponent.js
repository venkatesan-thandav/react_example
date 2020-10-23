import React from 'react';
import logo from './logo.svg';
import './App.css';




class ChildCompoent extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (  
          <div>
            {this.props.date}
            <div className="row">
                <div className="col-md-4">
                    Inside
                </div>
            </div>
          </div>
        );
      }
    
}

export default ChildCompoent;