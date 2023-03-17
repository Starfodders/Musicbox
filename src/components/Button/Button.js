import '../Chords/Chords.scss';

const Button = (props) => {
    return (
        <div className={`chords__button ${props.class}`}  onClick={() => {props.clickHandler(props.input)}} key={props.id}>
            {props.display}
        </div>
    )
}

export default Button;