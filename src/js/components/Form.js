import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = (props) => {

  const notesData = JSON.parse(localStorage.getItem('notes'));
  const [notes, setNotes] = useState(notesData || [])
  const [title, setTitle] = useState('')
  const [count, setCount] = useState(0)

  //Use effect, which resembles componentDidUpdate and componentDidMount from class



  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      {
        title
      }
    ])
    setTitle('')
  }


  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  useEffect(() => {
    document.title = count
    console.log('title value changed', count)
  })

  useEffect(() => {
    console.log('notes added', localStorage.getItem('notes', JSON.stringify(notes)))
    localStorage.getItem('notes', JSON.stringify(notes))
  })


  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <button onClick ={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add notes</p>
     <form onSubmit={addNote}>
       <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
       <button>add note</button>
       <h2>Change title value</h2>
       <button className="value-change" onClick={() => setCount(count + 1)}>+1</button>
     </form>
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