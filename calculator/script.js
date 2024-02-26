document.addEventListener('DOMContentLoaded', function() {
    // display values
    window.dis = function(val) {
        document.getElementById('display').value += val;
    }

    // clear display
    window.clr = function() {
        document.getElementById('display').value = "";
    }

    // evaluate expression and display result
    window.solve = function() {
        let x = document.getElementById('display').value;
        let y = eval(x);
        document.getElementById('display').value = y;
    }

    // key press listener
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const keyMap = {
            'Enter': '=',
            'Escape': 'C',
            'Add': '+',
            'Subtract': '-',
            'Multiply': '*',
            'Divide': '/'
        };

        const value = keyMap[key] || key;

        if(value === 'C' || value === 'Escape') {
            clr();
        } else if(value === '=' || key === 'Enter') {
            solve();
        } else if(['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'].includes(value)) {
            dis(value);
        }
    });
});