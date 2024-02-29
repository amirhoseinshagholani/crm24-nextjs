
declare var global:any;

const Test=()=>{
    return(
        <div className="p-5">
            <p>{global.sessionName}</p>
        </div>
    )
}

export default Test;