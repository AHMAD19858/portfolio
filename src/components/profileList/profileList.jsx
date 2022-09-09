import React from 'react'

function profileList({ id, title, active, setSelected }) {
    return (
        <li
          className={active ? "portfolioList active" : "portfolioList"}
          onClick={() => setSelected(id)}
        >
          {title}
        </li>
      );
}

export default profileList
