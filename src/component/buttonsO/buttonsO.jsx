import './style.css'

export default function buttonsO(props){
    function click(){
        console.log('Click Button');
    }
    return(
        <button className="button" style={{backgroundColor:props.bgColor}}>
            {props.name}
        </button>
    )
} 