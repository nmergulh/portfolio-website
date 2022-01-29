import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { featuredPortfolio, fullstack, frontend, backend } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "Featured", title: "Featured" },
    { id: "Full Stack", title: "Full Stack" },
    { id: "Front End", title: "Front End" },
    { id: "Back End", title: "Back End" },
  ];

  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Full Stack":
        setData(fullstack);
        break;
      case "Front End":
        setData(frontend);
        break;
      case "Back End":
        setData(backend);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.title}>
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
