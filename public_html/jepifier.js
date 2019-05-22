class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'input',
                {
                    placeholder:"Indsæt tekst her",
                    onChange: s => this.setState({inputText: s.target.value}),
                    size: 100
                }, null

            ), React.createElement(
                'h1', null, jepify(this.state.inputText)
            )
        );


    }

}


ReactDOM.render(
    React.createElement(InputField, null, null),
    document.getElementById("input_field")
);


function jepify(text) {
    var inputStringArray = text.split(" ");

    var result;

    if (inputStringArray.length > 1) {
        var firstString = inputStringArray.shift().toLowerCase();

        var camelWords = inputStringArray.map(s => s.charAt(0).toUpperCase() + s.substring(1)).join("");

        result = "#" + firstString + camelWords + "Jep";

    } else {
        result = "#" + inputStringArray.pop().toLowerCase() + "Jep";
    }

    return result;

}