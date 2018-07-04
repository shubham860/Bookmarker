AOS.init();

//listen for event submit

document.getElementById('btn').addEventListener('click',saveBookmark);

//save bookmarksResults

function saveBookmark(e){

var sitename = document.getElementById('ip1').value;
var siteurl = document.getElementById('ip2').value;

if(!sitename||!siteurl)
{
  alert("Please Enter The Form");
  return false;
}

var bookmark = {
  name : sitename,
  url : siteurl
}


if(localStorage.getItem('bookmarks') === null){
  var bookmarks = [];
  //add to array
  bookmarks.push(bookmark);
  //set to local storage
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}
else{
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
  document.getElementById('myForm').reset();

result();

//prevent form from submitting
  e.preventDefault();
}

function deleteBookmark(url){

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


  result();
}

function result(){

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');


  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well" data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="1500" style="border-style: solid;border-color:#b38f00;margin-left:87px;height:80px;width:650px;">'+
                                  '<h3 style=" color: white;text-align: center;margin-right: 255px;margin-top:5px">'+name+
                                  ' <a target="_blank" class="btn btn-default" href="'+url+'" style="background-color:#b38f00;margin-left:530px;margin-top:-35px;">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-default" href="#" style="background-color:white;margin-left:350px;margin-top:-103px;">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}
