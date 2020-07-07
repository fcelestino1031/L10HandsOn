$(document).ready(function(){
    $("header").hover(function(){
        $(this).css("background-color", "orange");
    }, function(){
        $(this).css("background-color", "aquamarine");
    });
});
$(document).ready(function(){
    $("p").click(function(){
        $(this).text("Hello, my name if Felipe Celestino and I am a Houston native and father of 3 girls.  Away from work, I enjoy spending time with my wife, kids, and volunteering at church.");
    });
});
$(document).ready(function(){
    $("li").dblclick(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $("input").keydown(function(){
        $(this).toggleClass("input");
    });
});


let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitBio").innerHTML = gitObject.bio;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/fcelestino1031", true);
gitHubRequest.send();





const toggleIcon = (e) => {
    e.target.classList.toggle('active');
  };
  
  $('.icon').on('mouseover', toggleIcon);
  
  $('.icon').on('mouseout', toggleIcon);
  
  

