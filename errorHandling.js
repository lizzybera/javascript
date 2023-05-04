"use strict";
// name ="lizzy";
// console.log(name)



try{
    const name = 'lizzy';
    name = 'precious';
    console.log(name);
}catch(err){
    // console.log(err)
    // throw err;
    throw new Error("do this properly")
}