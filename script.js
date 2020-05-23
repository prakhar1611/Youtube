$(document).ready(function(){

  var API_KEY="AIzaSyCDYpRHiuMgRK3g2KnTKsP1sAsY8v3AoMM"
var video=''

  $("#form").submit(function(event){
    event.preventDefault()

    var search=$("#search").val()

    videoSearch(API_KEY,search,20)
  })

  function videoSearch(key,search,maxResults){
    $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
      console.log(data);

      data.items.forEach(item => {

        video=`
<iframe width="220" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>

        `

        $("#videos").append(video)
      });
    })
  }
})
