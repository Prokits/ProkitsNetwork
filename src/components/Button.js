function Button(props) {
  return (
    <button className={props.className}>
      {props.link ? <a href={props.link}>{props.text}</a> : props.text}
    </button>
  );
}

export default Button;
