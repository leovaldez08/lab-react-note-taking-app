![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | REACT - PRONOTE

## Learning Goals

In this exercise, the goal is to learn state and components in react:

- when and how to setup react in your application,
- learn component and basic state management in react.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).


### Introduction

In this exercise, you will try to work with component and state. 

create a new react app using the following command
```
npx create-react-app pronote
cd pronote
```
Now go to your app.js and remove the unnecessary code. Your app.js should be looking similar to the this.
```
import React from 'react';
import HigherOrderFunctions from './components/hof/HigherOrderFunctions';
import './App.css';

function App() {
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
```

Now create a folder called components inside the src folder and create a component called Editor.jsx file. Once you create it you are good to go. Add your component to app.js file.
**Note: use rcc to generate the code template**.  

So let's get started!
Check below to see the overall output: You will be trying to replicate this

![Image description](https://i1.faceprep.in/ProGrad/l3-output1.png)

### PROGRESSION 1 | EDIT EDIT EDITOR
In this progression your task is to create a component called as Editor.jsx and Editor.css and complete design the component. To add a class selector to your html elements we use className in jsx. 
There are two parts in your component. On the left side you should define a editor and on the right side you should define your display, Whenever you type on the left side, it get's displayed on the right side. 

```Editor.jsx
// inside the render method
<div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text"/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text"></div>
                </div>                
            </div>
```


### PROGRESSION 2 | SET IT UP
In this progression let us define the editor functionality. To do this we need to define a empty value inside the state.

```
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }
```
**Do not forget to add styles to your Editor.jsx**. To add style create a file called Editor.jsx and write styles to it.

### PROGRESSION 2 | START TYPING
We have already defined the state, but it won't work unless we define the event handler right. To do that in react we need to do some minor changes to your render component and also we need to handle the onChange event.
Check out the below code snippet.

```
      <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <!-- call the handleChanges method in the onChange event and set the default value as empty-->
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
```
```
//event handler method to change the state.
//setState is used to change the state.
  handleChange(e){
        this.setState({value: e.target.value});
    }
```
Once you do the above you can see your output.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding Kalvium ❤️!

