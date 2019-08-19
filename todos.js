var btn = document.querySelector("button")
console.log(btn);
function submit(task,created){
console.log(e)

}
document.querySelector("form").onsubmit = function(e){
    e.preventDefault()
    console.log(e.srcElement[1],e.srcElement[3])
    var task = e.srcElement[1].value;
    var created = e.srcElement[3].value;
    console.log(task,created);
    submit(task,created);
}