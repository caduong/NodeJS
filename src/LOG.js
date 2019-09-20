var log = {
    info: function(info) {
        console.log('Info:' + info)
    },
    warning: function(warning) {
        console.log('Warning:' + warning)
    },
    error: function(error) {
        console.log('Error:' + error)
    },
}
module.exports = {log}; 


// var log2 = {
//     info: function(info) {
//         console.log('Info:' + info)
//     },
//     warning: function(warning) {
//         console.log('Warning:' + warning)
//     },
//     error: function(error) {
//         console.log('Error:' + error)
//     },
// }
//var logger = {log}

//export default logger;

//export const logger = {log, log2};
