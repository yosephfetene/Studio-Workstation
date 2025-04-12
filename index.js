var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofdrumbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick)
}
function handleclick{
    alert("i got clicked");
}