const template =(
    <div>
            <h1>Hello world</h1>
            <p>Paragraph</p>
    
    </div>
    
)

let count =0;

const addOne = () =>{
    count++;
    console.log("added one", count);
    render();
}

const subOne = () =>{
    count--;
    console.log("subtracted one", count);
    render();
}
const reset = () =>{
     count = 0;
     console.log("reseted", count);
     render();
}
const render = () =>{


    const counterTemplate = (
        <div>
            <h1 id="counter">{count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {subOne}>-1</button>
            <button onClick = {reset}>Reset</button>
        </div>
    
    
    )
    
    const myApp = document.querySelector("#my-app");
    
    ReactDOM.render(counterTemplate, myApp);
}
render();



