
    const totalCount=document.getElementById("cart");
    var count=0;
    totalCount.innerHTML= count;
    const inc = () => {
        count++;
        totalCount.innerHTML= count;
    };
    
 // Select increment and decrement buttons
const incrementCount = document.getElementsByClassName("btn");
