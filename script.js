var getul = document.getElementById('ul')

var inp = document.getElementById('inp')



    function add()
{
    if(inp.value == ''){
        alert("PLease enter in Input field")
        }
else{

    var li = document.createElement("li")
    var litext = document.createTextNode(inp.value)
    li.appendChild(litext)
    getul.appendChild(li)
    inp.value = ""
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick',"del(this)")
    var editbtn = document.createElement("button")
    var editbtntext = document.createTextNode("Edit")
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editbtn(this)')
    // editbtn.setAttribute('class','abc')

}
}
function deleteAll(){
    getul.innerHTML = ''
}



function del(e){
e.parentNode.remove()
}
function editbtn(e){
    var useredit = prompt('Enter Edit value',e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = useredit
}
