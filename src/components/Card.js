function Card(props) {
  return (
    <div className="card">
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <img src={props.image} alt={props.image_alt} />
    </div>
  );
}

export default Card;
