import React, { Component } from "react";
import { ThemeContext } from "./Context";

export class ClassContextComponent extends Component {
    themeStyle(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin:'2rem'
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    darkTheme => {
                        return <div style={this.themeStyle(darkTheme)}>Class Theme </div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}