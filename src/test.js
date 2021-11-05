const hello = (name) =>{
    console.log("hello " + name);
}

const dogHello = (hellofn) =>{
    hellofn("Dog");
}
const catHello = (hellofn) =>{
    hellofn("Cat");
}

dogHello(hello);

//catHello();