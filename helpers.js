

function successfullMessage(msg) {
    return "β *Devil*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Devil*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Devil*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
