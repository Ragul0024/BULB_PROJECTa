function change()
{
    var img=document.getElementById("bulb");

    if(img.src.match("on"))
    {
        img.src="./assets/off.jpg";
    }
    else{
        img.src="./assets/on.jpg";
    }
}