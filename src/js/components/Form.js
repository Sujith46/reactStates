import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {

  const [count, setCount] = useState(props.count)


  return (
    <div>
      <p>The current count is {count}</p>
      <buttom onClick={() => setCount(count - 1)}>-1</buttom>
      <buttom onClick={() => setCount(count + 1)}>+1</buttom>
    </div>
  )
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App count={3}/>, document.getElementById('root'))

// class Form extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { value } = event.target;
//     this.setState(() => {
//       return {
//         value
//       };
//     });
//   }

//   render() {
//     return (
//       <form>
//         <h1>Hey there!!</h1>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }

// export default Form;

// const wrapper = document.getElementById("container");
// wrapper ? ReactDOM.render(<Form />, wrapper) : false;