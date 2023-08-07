

const Practice =()=>{
    // reversing a string 
    
    let str = "srikanth";
    console.log("given string is "+ str);
    let strlen = str.length;
    let newstr = '';
    for(let i=strlen-1;i>=0;i--){
        newstr+=str[i];

    }
    console.log("reverse string is "+newstr);


















    return (
        <h1>Practice.com</h1>
    )
}

export default Practice;