import './Button.scss';

const Button = (props) => {
    return (
        <div className='button' onClick={() => {props.addChordClickHandler(props.note)}} key={props.id}>
            {props.displayNote}
        </div>
    )
}

export default Button;