counter = 0;

var pages;

window.addEventListener("load", () => {
  tabs = document.getElementsByClassName("button");

  document.getElementById("home_button").addEventListener("click", () => {
    switch_tab("homeTab");
  });

  document.getElementById("about_button").addEventListener("click", () => {
    switch_tab("aboutTab");
  });

  document.getElementById("interact_button").addEventListener("click", () => {
    switch_tab("interactTab");
  });

  document.getElementById("counter_button").addEventListener("click", (e) => {
    ++counter;
    document.getElementById("counter_label").innerHTML = "Counter: " + counter;
  });
});
function hide_all_tabs() {
  for (let i = 0; i < tabs.length; ++i) {
    tabs.item(i).style.display = "none";
  }
}

function switch_tab(tab_name) {
  hide_all_tabs();
  document.getElementById(tab_name).style.display = "block";
}