var attempt = 3; 

var a_uname = "admin123"
var a_pwd = "123abc"

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == a_uname && password == a_pwd){
        document.querySelector("#create_post_button").style.display = 'block';
        document.querySelector("#login").style.display = 'none';
        alert("Logged in");
        document.getElementById("login_button").value=a_uname;
        attempt = 3;
    }
    else{
        attempt --;
        alert("You have left "+attempt+" attempt;");

        if( attempt == 0){
            document.getElementById("submit").disabled = true;
        }
    }
}

function add_post(){
    var post_title = document.getElementById("post_title").value;
    var post_catagory = document.getElementById("post_catagory").value;
    var post_detail = document.getElementById("post_detail").value;


    var temp = document.getElementsByTagName("template")[0];
    var item = temp.content.querySelector("div");

    var clone = document.importNode(item,true);
    clone.className.replace("catagory", post_catagory);
    clone.querySelector("h3").textContent = post_title;
    clone.querySelector("p").textContent = post_detail;

    document.querySelector(".posts_area").appendChild(clone);
    document.getElementById("post_form_container").style.display="none";
    document.getElementById("new_posts_header").style.display="block";
}
