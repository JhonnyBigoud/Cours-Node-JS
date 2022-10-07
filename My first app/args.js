module.exports = new function() {
    let input = process.argv.slice(2);
    let output = {};

    input.forEach(arg => {
        let item = arg.split('=');
        let key = item[0];
        let value = item[1];
        
        output[ key ] = value;
    });

    return output;
}