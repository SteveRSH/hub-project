function git () {
  let data = JSON.parse(this.responseText);
  console.log(data);
  let git = document.querySelector('.git');
  let icon = document.querySelector('.icon');



    git.innerHTML+=`<p>
    <p>Name: ${data.name}</p> <br>
    <p>Github: ${data.html_url}</p> <br>
    <p>Email: ${data.email}</p> <br>
    <p>Company: ${data.company}</p> <br>
    <p>Website: ${data.url}</p> <br>
    </p>`;

    icon.innerHTML+=`<div>
    <img src= "${data.avatar_url}"></div>`;
  }




let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/SteveRSH");
req.addEventListener("load", git);
// req.addEventListener("load", imagine);
req.send();

//data_avatar.url
