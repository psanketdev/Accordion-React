import React from 'react'

export default function FilterCategory({menus, filterData}) {
  return (
    <ul className='filter-menu'>
      {
        menus.map((ele, i) => {
            return  (
              <li key={i}>
                <button type="button" onClick={() => filterData(ele)}>{ele}</button>
              </li>
            )
        })
      }
    </ul>
  )
}
