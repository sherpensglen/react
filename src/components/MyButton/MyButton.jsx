import "./mybutton.css";

function MyButton(props) {

  return (
    <button
      onClick={props.onClick}
      className="btn btn-dark"
    >
      {props.children}
    </button>
  );
}

export default MyButton;
