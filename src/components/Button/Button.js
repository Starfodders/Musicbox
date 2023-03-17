import './Button.scss';

const Button = (props) => {
    return (
        <div className='button' onClick={() => {props.clickHandler(props.input)}} key={props.id}>
            {props.display}
        </div>
    )
}

export default Button;