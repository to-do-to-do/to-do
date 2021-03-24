
window.onload = ()=>{
  let todo = document.getElementById("todo");
    let a_bit = document.getElementById("abit");
      let of_everything = document.getElementById("ofeverything");
        let together = document.getElementById("together");
  let it_all = document.getElementById("itall");
    let or_maybe_not = document.getElementById("ormmaybenot");
      let if_someone_else = document.getElementById("ifsomeoneelse");
        let already_did_it = document.getElementById("alreadydidit");
  let nothing = document.getElementById("nothing");
  let something = document.getElementById("something");

  todo.addEventListener("click",()=>{
    toggle(a_bit);
    toggle(it_all);
    toggle(nothing);
    toggle(something);
  });
    a_bit.addEventListener("click",()=>{
      toggle(of_everything);
    });
      of_everything.addEventListener("click",()=>{
        toggle(together);
      });

  it_all.addEventListener("click",()=>{
    toggle(or_maybe_not);
  });
    or_maybe_not.addEventListener("click",()=>{
      toggle(if_someone_else);
    });
  or_maybe_not.addEventListener("click",()=>{
    toggle(if_someone_else);
  });


}

function toggle(element){
  let style = window.getComputedStyle(element);
  let dis = style.getPropertyValue("display");
  if(dis=="inline"){
    element.style.display = "none";
  }else{
    element.style.display = "inline";
  }
}
