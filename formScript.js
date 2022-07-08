//COMMENTOR SUBMISSION
const commentForm = document.querySelector('.commentForm');

console.log(commentForm)

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    //save user's inputs
    const userName = document.querySelector('#name').value;
    const userComment = document.querySelector('#addComment').value;

    //new elements
    const article = document.createElement('article');
    article.classList.add('commentor');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('commentorImgContainer');
    imgContainer.innerHTML = `<img src="./captured-final-assets/comment-2.jpg" alt="a close up shot of a blond girl smiling">`;

    const textContainer = document.createElement('div');
    textContainer.classList.add('commentorTextContainer');
    const userCommentInfo = `
    <time datetime="2019-10-10" class="postDate">Tuesday October 10th by ${userName}</time>
    <p>${userComment}</p>`;
    textContainer.innerHTML = userCommentInfo;

    article.appendChild(imgContainer);
    article.appendChild(textContainer);

    const commentSection = document.querySelector('.comments');
    commentSection.appendChild(article);
    
})
