import React, { useState } from "react";
import Menu from "./Menu";
import FilterCategory from './FilterCategory';
import FilterData from './FilterData';
import './filter.css';

const filterItems =['all', ...new Set(Menu.map(ele => ele.category))];

export default function Gallery() {
  const [data, setData] = useState(Menu);
  const [filterMenu, setFilterMenu] = useState(filterItems);

  const filterData = (categoryName) => {
    if(categoryName === 'all') {
      setData(Menu);
      return;
    }
    const filterData = Menu.filter(ele => ele.category === categoryName);
    setData(filterData)
  };


  return (
    <section className="filter-section">
      <div className="container">
        <h2>Filter (Order your favourite dish)</h2>

        {/* Filter category buttons */}
        <FilterCategory menus={filterMenu} filterData={filterData} />

        {/* Filter data */}
        <FilterData items={data} />
      </div>
    </section>
  );
}


