function filter(){
    var no_posts = false;

    var select = document.getElementById('catagory_select');
    var class_name = select.options[select.selectedIndex].value;
    
    var posts = document.getElementsByClassName("post");
    var filtered_posts = document.getElementsByClassName(class_name);

   
    document.getElementById("no_posts_msg").style.display = "none";


    for (let i = 0; i < posts.length; i++) {
        posts[i].style.display = "none";
    }

    if(class_name === "all"){
        for (let i = 0; i < posts.length; i++) {
            posts[i].style.display = "block";
        }
    }
    else{
        for (let i = 0; i < filtered_posts.length; i++) {
            filtered_posts[i].style.display = "block";
        }
    }
    if(filtered_posts.length == 0){
        no_posts = true;
        document.getElementById("no_posts_msg").style.display = "block";
    }


   
}