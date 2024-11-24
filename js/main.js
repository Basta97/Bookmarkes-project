let bookmarkNameInput = document.getElementById('bookmarkName');
let bookmarkUrlInput = document.getElementById('bookmarkURL');
let showBookmark = document.getElementById('bookmark-list-show');
let bookmarkList=[]
let buttS=document.getElementById('add-btn');
let show;
let nameCh;
let urlChe;
let checker =false;


if(localStorage.getItem('bookmarkList')!==null){
    bookmarkList=JSON.parse(localStorage.getItem('bookmarkList'));
    disBookmark();
}

function addB(){
    let bookmark={
        bookmarkName:bookmarkNameInput.value,
        bookmarkUrl: bookmarkUrlInput.value
    }
    bookmarkList.push(bookmark);
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
    cleatF();
    disBookmark();


}
function cleatF(){
    bookmarkNameInput.value=null;
    bookmarkUrlInput.value=null;
    document.getElementById('bookmarkURL').classList.remove('is-valid');
    document.getElementById('bookmarkURL').classList.remove('is-invalid');
    document.getElementById('bookmarkName').classList.remove('is-valid');
    document.getElementById('bookmarkName').classList.remove('is-invalid');
}
function disBookmark(){
    let show=``;
    for(let i=0;i<bookmarkList.length;i++){
        show+= `<tr>
              <td class="p-2">${i+1}</td>
              <td class="p-2">${bookmarkList[i].bookmarkName}</td>
              <td class="p-2"><a href="${bookmarkList[i].bookmarkUrl}" target="_blank"><button class="btn btn-danger delete-btn">Visit</button></a></td>
              <td class="p-2"><button onclick="deleteB(${i})" id="dl-btn" class="btn btn-danger delete-btn">Delete</button></td>
             </tr>`
    }
    showBookmark.innerHTML = show;
    
    
}


function deleteB(index){
    bookmarkList.splice(index,1);
    disBookmark();
    localStorage.setItem('bookmarkList',JSON.stringify(bookmarkList))
}

function isValidName(){
     nameCh=/^([a-z]|[A-Z]){4}/.test(bookmarkNameInput.value);
 
   
    if( nameCh===true){
        document.getElementById('bookmarkName').classList.remove('is-invalid');
        document.getElementById('bookmarkName').classList.add('is-valid');
        return true;

    }
    else{
        document.getElementById('bookmarkName').classList.remove('is-valid');
        document.getElementById('bookmarkName').classList.add('is-invalid');
        return false;
    }
}
function isValidUrl(){

    urlChe=/^(https?|www.)/.test(bookmarkUrlInput.value); 
    
  
   if( urlChe===true){
       document.getElementById('bookmarkURL').classList.remove('is-invalid');
       document.getElementById('bookmarkURL').classList.add('is-valid');
       checker=urlChe;

   }
   else{
       document.getElementById('bookmarkURL').classList.remove('is-valid');
       document.getElementById('bookmarkURL').classList.add('is-invalid');
       checker=urlChe;
   }
   
}
buttS.addEventListener('click',function(){
    if (checker===false){
    
        document.getElementById('layer').classList.remove('d-none')
    }
    else{
        
        addB()
        checker =false;
        
    }
});
document.getElementById('alert-w').addEventListener('click',function(){
    document.getElementById('layer').classList.add('d-none')
})   
