import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/Link';
import Button from '@material-ui/core/Grid';
import { mergeClasses } from '@material-ui/styles';
const crypto = require('crypto')


class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
        const salt = "h3ll0";

        var pswrd = salt.concat(this.state.value);
        var truePswrd = "hi";
        var trueHash = crypto.createHash('sha256').update(truePswrd).digest('hex');
        var pswrdHash = crypto.createHash('sha256').update(pswrd).digest('hex');

        console.log(trueHash);
        console.log(pswrd);
    }
    handleSubmit(event) {
        var hash = crypto.getHashes();
        const salt = "h3ll0";
        var pswrd = salt.concat(this.state.value);
        var truePswrd = "h3ll0hi";
        var trueHash = crypto.createHash('sha256').update(truePswrd).digest('hex');
        var pswrdHash = crypto.createHash('sha256').update(pswrd).digest('hex');

        console.log(trueHash);
        console.log(pswrd);
        if (trueHash ==pswrdHash) {
            window.location.href = "https://google.com"
        } else {
            alert("Incorrect Password");
        }
    }

    render() {
        var classes = makeStyles({
            root: {
              width: "100%",
              height: "100%",
              display: 'flex',
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignContent: "space-between"
            },
            caps: {
              fontVariant: "all-small-caps"
            },
            content: {
              alignContent: "top"
            }
          });
        return (
            <div class={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                
                    <textarea value={this.state.value}  onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

            );
    }
}

export default PasswordInput