
const positionInput = document.querySelector("#position");
const dateInput = document.querySelector("#date");
const nameInput = document.querySelector("#fullName");
const commentInput = document.querySelector("#comment");
const showInput = document.querySelector("#showComment");
const msg = document.querySelector("#msg");
const commentSubmit = document.querySelector("#commentSubmit");
const commentsBox = document.querySelector("#commentsBox");


commentSubmit.addEventListener("click", onCommentSubmit);
function onCommentSubmit(e){
    e.preventDefault();
    if(commentInput.value == "" || dateInput.value == "" || nameInput.value == ""){
        msg.innerHTML = "Please fill all fields. "
        setTimeout(() =>  msg.innerHTML="", 3500); 
    }else if(showInput.checked === true){
        const div = document.createElement("div");
        const h5 = document.createElement("h5");
        const span = document.createElement("span");
        const pComment = document.createElement("p");
        const pDate = document.createElement("p");
    
        div.className = "border-top";
        h5.className = "mb-0"
        span.className = "fw-lighter"
        pComment.className = "mb-0"
        pDate.className = "fw-lighter text-right mb-0"
        
        commentsBox.appendChild(div);
        div.appendChild(h5);
        div.appendChild(span);
        div.appendChild(pComment);
        div.appendChild(pDate);
    
        h5.innerText = nameInput.value;
        span.innerText = positionInput.value;
        pComment.innerText = commentInput.value;
        pDate.innerText = dateInput.value;
    }else {
        msg.innerHTML = " Thanks, Your comment has been sent! "
        setTimeout(() =>  msg.innerHTML="", 3500); 
    }
}
// <div class="border-top">
// <h5 class="mb-0"></h5>
// <span class="fw-lighter "></span>
// <p class="mb-0"></p>
// <p class="fw-lighter text-right mb-0"></p>
// </div> 