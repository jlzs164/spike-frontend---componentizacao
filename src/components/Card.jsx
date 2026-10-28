function Card({ title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button">Ler mais</button>
    </article>
  );
}

export default Card;