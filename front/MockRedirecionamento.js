let url = window.location.href;
url = url.split("/front");
auth = url[1];


if (auth == "/" || auth == "/index.html"){
  window.location.href = "login.html"
}
       
url = url[1].split('/index.html?auth=')
if (url[1] === "false") {
  window.location.href = "login.html?auth=false"
}else if(url[1] == "true"){
  window.location.href = "home.html"
}