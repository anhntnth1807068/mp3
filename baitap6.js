var myModal = document.getElementById('myModal');
var youtubeFrame = document.getElementById('youtubeFrame');
var span = document.getElementsByClassName("close")[0];
searchYoutube();


function searchYoutube() {
    var keyword = document.getElementById('keyword').value;
    var mp3 _API = 'https://content.googleapis.com/youtube/v3/search?q=' + keyword + '&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var responseObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < responseObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<img onclick = "doSomething (\'' + responseObject.name.singer.author.thumbnail.link+ '\')" class = "video-thumb" src = "' + responseObject.items [i].snippet.thumbnails.medium.url + '">';
                videoItem += '<h3>' + responseObject.items[i].snippet.title + '</h3>';
                videoItem += '</div>';
                content += videoItem;
            }
            document.getElementById('myTubes').innerHTML = content;
        }
    };
    xhttp.open("GET", mp3_API, true);
    xhttp.send();
}

document.getElementById("keyword").onkeypress = function (event) {
    if (event.keyCode === 13) {
        searchYoutube();
    }
};
document.getElementById('btnSearch').onclick = function () {
    searchYoutube();
};


function doSomething(videoId) {
    youtubeFrame.src = 'http://www.youtube.com/embed/' + videoId;
    myModal.style.display = 'block';
}
span.onclick = function () {
    myModal.style.display = 'none';
    youtubeFrame.src = '';
};