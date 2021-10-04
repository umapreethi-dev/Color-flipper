function ColorGenerate(props){
    const {handleClick,randomColor} = props;
    let color = randomColor();
    console.log(color);
    return(
        <div className="centerbox">
            <h1>Background Color: {color}</h1>
            <button className="button" type="submit" onClick ={()=>handleClick(color)}>Generate Color</button>
        </div>
    )
}
export default ColorGenerate;