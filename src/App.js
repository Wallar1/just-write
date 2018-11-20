import React, { Component } from 'react';
import Note from './note.js';
import List from '@material-ui/core/List';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: {
        1: {
          title: 'My first note :D',
          body: 'This app is really great',
        },
        2: {
          title: 'Pick up the kids from school',
          body: 'They get out at 3. Dont forget this time!',
        }
      },
      being_edited: '',
    }
  }

  set_in_edit = (id) => {
    this.setState({being_edited: id})
  }

  addNote = () => {
    let notes = {...this.state.notes}
    let id = Math.random()
    notes[id]= {title: '',body:''}
    this.setState({notes, being_edited: id})
  }

  render_notes = () => {
    let edited = this.state.being_edited
    return Object.keys(this.state.notes).map((id)=>{
      let note = this.state.notes[id]
      return <Note key={id} 
                note={note}
                set_in_edit={this.set_in_edit}
                being_edited={edited}
                id={id}
              />
    })
  }


  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '500px'}}>
        <List style={{backgroundColor: 'white'}}>
          { 
            this.render_notes()
          }
        </List>
        <h1 onClick={this.addNote}>+</h1>
      </div>
    )
  }
}

export default App;
