import React, {Component, Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';


class Note extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: props.note.title,
      body: props.note.body,
    }
  }

  update = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  start_editing = (e) => {
    this.props.set_in_edit(this.props.id)
  }

  componentDidUpdate(){
    tinymce.init({
      selector: '#mytextarea'
    });
    console.log(document.getElementById('mytextarea'))
  }

  render(){
    if(this.props.id === this.props.being_edited.toString()){
      return(
        <Fragment>
          <TextField
            name='title'
            label='Title'
            value={this.state.title} 
            onChange={this.update}
            fullWidth={true}
            placeholder='Title'
          />
          <TextField 
            name='body'
            label='Body'
            value={this.state.body}
            onChange={this.update}
            multiline={true}
            fullWidth={true}
            placeholder='Body'
          />
        </Fragment>
      )
    }
    else{
      return(
        <ListItem onClick={this.start_editing}>
          <ListItemText primary={this.state.title} secondary={this.state.body}/>
        </ListItem>
      )
    }
  }
}

export default Note