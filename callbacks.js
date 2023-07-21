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
        posts.forEach(function(post, index){ //going down th whole json object with forEach
            output += `<li>${post.title}</li>`; //adding every single array inside the json object to the output variable
        });
        document.body.innerHTML = output //printing the output vatiable to the webpage
    }, 1000 /*setTimeout() ==> the amount of time it takes*/);
}

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000)
}

createPost({ title:'Post six', body: 'this is post six'}/*post arg*/, getPosts/*callback arg, so it just runs the getPosts function after finished!*/);