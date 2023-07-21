//this would be a Json file or API of some sorts
const posts = [
    { title: 'Post one', body:'this is post one'},
    { title: 'Post two', body:'this is post two'},
    { title: 'Post three', body:'this is post three'},
    { title: 'Post four', body:'this is post four'},
    { title: 'Post five', body:'this is post five'}
];

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post, index){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 2000 /*setTimeou() ==> the amount of time it takes*/);
}

getPosts();