import './Button.css';

export default function Button(props) {
    return (
        <>
            <button className={props.class} type={props.type}>{props.label}</button>
        </>
    );
}
