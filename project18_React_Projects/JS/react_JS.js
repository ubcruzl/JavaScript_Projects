function fnReact(){
    var counter = React.createClass( {
        render: function() {
            var timePassed = Math.round(this.props.timePassed / 100);
            var secondsPassed = timePassed / 10 + (timePassed % 10 ? '':'.0'); //% – finds the remainder
            //? – a conditional operator that checks for whether or not a condition is true, the : following it is shorthand for “else”
            var text = "Code began running " + secondsPassed + " seconds ago.";
            return React.DOM.p(null,text);      //React.createClass – creates component classes
        }
    });
    
    var counterFactory = React.createFactory(counter); //React.createFactory – a function that generates a factory (object that can create other objects)
    
    var start = new Date().getTime();
    setInterval(function() {                //setInterval() – a method that evaluates an expression at specified intervals (milliseconds)
        ReactDOM.render(                        //ReactDOM.render() – used to render a React Component or Components
            counterFactory({ timePassed: new Date().getTime() - start }),
            document.getElementById("MyReactCode")
        );
    }, 50);
}
