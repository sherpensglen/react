import "./mybutton.css";

function MyButton(props) {
  return (
    <a
      className="btn"
    >
      {props.children}
    </a>
  );
}

export default MyButton;
