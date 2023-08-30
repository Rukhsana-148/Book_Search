const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector('form');
const search = document.querySelector('#search');
const header = document.getElementsByClassName("header");
const show = document.querySelector('#show');
const getWeather = async (search)=>{
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    const response = await fetch(url);

    const data = await response.json();
   
    if(data.items.length===0){
        alert('Search gain')
    }else{
       displayBook(data);
     
    }
}

function displayBook(data){
   var len = data.items.length;
 
 

    for(var i=len-1;i>=0;i-=1){
        item = data.items[i];
        title1 = item.volumeInfo.title;
        author1 = item.volumeInfo.authors;
        publisher1 = item.volumeInfo.publisher;
        bookLink1 = item.volumeInfo.previewLink;

        bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail:placeHldr ;
        show.innerHTML +=
        '<div class="book_1">'+
        formatOutput(bookImg1, title1, author1, publisher1, bookLink1)
        '</div>';
        
    }
}
function formatOutput(bookImg, title, author, publisher, bookLink) {

   var htmlCard = `
   <img src="${bookImg}"  alt="...">
   <h5 class="card-title">${title}</h5>
   <p class="card-text">Author: ${author}</p>
   <p class="card-text">Publisher: ${publisher}</p>
   <div class="footer">
   <a target="_blank" href="${bookLink}" class="btn">Read Book</a>
   </div>

 
   `
    return htmlCard;
  }

form.addEventListener(
    "submit",
    function(event){
        alert('Wait few seconds....')
        getWeather(search.value)
        event.preventDefault();
    }
)
