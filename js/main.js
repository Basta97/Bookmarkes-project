let bookmarkNameInput ;
let bookmarkUrlInput ;
let bookmark={
    bookmarkName:'',
    bookmarkUrl :''
};
let bookmarkList=[]
let sumbitB=document.getElementById('add-btn');
let show;
function addB(){
    bookmarkNameInput = document.getElementById('bookmarkName').value;
    bookmarkUrlInput = document.getElementById('bookmarkURL').value;

    bookmark={
        bookmarkName:bookmarkNameInput,
        bookmarkUrl: bookmarkUrlInput
    }
    bookmarkList.push(bookmark);
    disBookmark();


}
function disBookmark(){
    let i;
    for( i=0;i<bookmarkList.length;i++){
        show+= `<tr>
              <td>${i}</td>
              <td>${bookmarkList[i].bookmarkName}</td>
              <td><a href="https://www.google.com" target="_blank">${bookmarkList[i].bookmarkUrl}</a></td>
              <td><button class="btn btn-danger delete-btn">Delete</button></td>
             </tr>`
    }
    console.log(bookmarkList[i])
}
sumbitB.addEventListener('click',addB)
console.log(bookmarkList)