document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newuser input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#users").innerHTML += `
            <div class="user">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            width="20em" height="20em" alt="Error in Image" />
            <span id="username" class= "userlist">
                    ${document.querySelector("#newuser input").value}
                </span>
                <span id="taskname">
                ${document.querySelector("select[name='todos']").value}
            </span>
                <button class="delete">
                X

                </button>
            </div>
        `;

    var current_users = document.querySelectorAll(".delete");
    for (var i = 0; i < current_users.length; i++) {
      current_users[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    document.getElementById("name").value = "";
  }
};

/*Used loop for to search in each items for name*/
function serchName() {
  var input, filter, users, user, userlist, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  users = document.getElementById("users");
  user = users.getElementsByClassName("user");

  for (i = 0; i < user.length; i++) {
    userlist = user[i].getElementsByClassName("userlist")[0];
    txtValue = userlist.textContent || userlist.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      user[i].style.display = "";
    } else {
      user[i].style.display = "none";
    }
  }
}
