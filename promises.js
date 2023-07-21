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
    }, 2000 /*setTimeout() ==> the amount of time it takes*/);
}

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else {
                reject('Error, something went wrong')
            }
        }, 2000)
    });
}

createPost({ title:'Post six', body: 'this is post six'})
    .then(getPosts)
    .catch(err => console.log(err));