import React from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <p><small>Rendered with React</small></p>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
