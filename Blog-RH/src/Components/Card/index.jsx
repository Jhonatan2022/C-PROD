import { useContext } from "react";
import { ContextApp } from "../../Context";
import { Comment } from "../Comment";
import { ButtonsCard } from "../ButtonsCard";
import { ButtonSeting } from "../ButtonSetting";
import { CardFooter } from "../CardFooter";
import "./styles.css";

function Card() {
  const { data, open } = useContext(ContextApp);

  return (
    <section className="main-section">
      {data.length === 0 && <h1 className="no-data">No hay datos</h1>}
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-header">
            <h2 className="card-title">{item.title}</h2>
            <ButtonSeting id={item.id} title={item.title} imgSrc={item.imgSrc} />
            <span className="card-date">{item.date}</span>
          </div>
          <figure className="img-container">
            <img src={item.imgSrc} alt={item.title} title={item.title} />
          </figure>
          <ButtonsCard item={item} />
          {open === item.id && <Comment item={item} />}
          <CardFooter id={item.id} />
        </div>
      ))}
    </section>
  );
}

export { Card };
