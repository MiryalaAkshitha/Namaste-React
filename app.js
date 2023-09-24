
// example 1
// const heading = React.createElement("h1",{id:"heading"},"Hello from React")
// console.log(heading) //object

// example 2
{/* <div>
    <div id="parent">
        <div id="child">
            <h1>Im H1</h1>
            <h1>Im H2</h2>
        </div>
    </div> */}
// </div>
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm H1"),React.createElement("h2",{},"I'm H2")]))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent) //h1 tag