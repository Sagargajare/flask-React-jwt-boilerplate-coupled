import React, { Component } from 'react';
import MyComp from './MyComp';
import Button from '@material-ui/core/Button';
export default class Home extends Component {
    render() {
       return (
          <div>
             <Button variant="contained" color="primary">
               Hello World
            </Button>
            

          </div>
       )
    }
}
