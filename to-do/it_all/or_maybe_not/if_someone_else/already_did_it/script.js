window.onload = ()=>{
  for(i=0;i<82;i++){
    let img = document.createElement("IMG");
    img.setAttribute("src","assets/list_"+i+".jpg");
    img.setAttribute("alt","image"+i);
    document.getElementById("body").appendChild(img);
  }

}
