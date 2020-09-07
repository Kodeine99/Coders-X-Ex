import React, { Component } from 'react';
// import './TodoItem.css';

class List extends Component {
  
  render() {
    const { type } = this.props;
    
    return (
      <div>
        {
        type.isRender &&
          <div className="List">
            <p>Order list types</p>
            <ol type={type.type}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </div>
      }
      </div> 
    )
  }
}

export default List;

// class App extends Component {
//   constructor() {
//     super();
//     this.types = [
//       { type: '1', isRender: true},
//       { type: 'A', isRender: false},
//       { type: 'a', isRender: false },
//       { type: 'I', isRender: false },
//       { type: 'i', isRender: false }
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         {
//           // this.types.isRender &&
//           this.types.map((type, index) => <List key={index} type = { type } />)
//         }
//         {
//           this.types.length === 0 && 'Nothing to render'
//         }
//       </div>
//     )
//   }
// }
