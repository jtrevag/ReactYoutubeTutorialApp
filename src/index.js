import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyB4xqmebeaPE7glVab9qKy5C4TXcH4w6JY";

// Create a new component. This component should produce 
// some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));