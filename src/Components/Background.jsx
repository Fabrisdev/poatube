import "./Background.css"

function Background({ color, children }){
  return(
    <div className="background" style={{ backgroundColor:color }}>
      { children }
    </div>
  )
}

export default Background