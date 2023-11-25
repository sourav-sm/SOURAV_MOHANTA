import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
// import ImageFour from '../images/image4.png'
import image5 from '../images/image5.png'
import {useState} from "react"
import  "./styles.scss"


const portfolioData=[
  {
    id:2,
    name:"Travel",
    image:image3,
    link:"https://github.com/sourav-sm/Adventura",
  },
  {
    id:3,
    name:"Weather",
    image:image5,
    link:"https://github.com/sourav-sm/Add_to_Cart",
  },
  {
    id:2,
    name:"Shopping cart design",
    image:image2,
    link:"https://github.com/sourav-sm/Add_to_Cart",
  },
  {
    id:2,
    name:"Todo App",
    image:image1,
    link:"https://github.com/sourav-sm/DAY_PLANER",
  },
  // {
  //   id:2,
  //   name:"Shopping cart design",
  //   image:ImageFive
  // },
]

const filterData = [
  {
    filterData:1,
    label:'All'
  },
  {
    filterData:2,
    label:'Development'
  },
  {
    filterData:3,
    label:'Design'
  }
]
const Portfolio=()=>{
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContetent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank">  rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                     </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
