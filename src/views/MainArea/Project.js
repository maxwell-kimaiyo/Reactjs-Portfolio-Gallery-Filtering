import React, {useState, useMemo } from "react";
import  { Redirect } from 'react-router-dom';
import PortfolioItem from "./PortfolioItems";
import portfoliolist from '../../data'
const categorylist = [
  { id: 1, category: "all", value: "all" },
  { id: 2, category: "design", value: "all" },
  { id: 3, category: "desktop", value: "all" },
  { id: 4, category: "mobile", value: "all" },
  { id: 5, category: "web", value: "all" },
];
function Project() {
  const [filter, setFilter] = useState("all");
  const filteredPortfolio = useMemo(() => {
    if (filter === "all") return portfoliolist;
    return portfoliolist.filter((portfolio) => portfolio.category === filter);
  }, [filter]);
  return (loading ?<div className="loading"><i className="fas fa-spinner fa-spin"/></div>: error ?<Redirect to='/error404' />:
    <section className="project-area text-center">
      <span className="h-span">What I did</span> 
      <h2 className="h1">
      <i className="fas fa-briefcase"></i>MY WORKS
        <span className="underline">
          <span className="r-square" />
          <span className="l-square" />
        </span>
      </h2>
      <div className="container ">
        <div className="button-group">
          {categorylist.map((types) => (
            <button
              onClick={() => setFilter(types.category)}
              type="button"
              className="active"
              id="btn1"
              data-filter="*"
              key={types.id}
            >
              {types.category}
            </button>
          ))}
        </div>

        <div className="row grid">
          {filteredPortfolio.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 element-item latest"
              key={item.id}
            >
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
