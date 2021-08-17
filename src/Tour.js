import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, remove_tour }) => {
  const [read_more, set_read_more] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {
            read_more ? info : `${info.substring(0, 200)}...`
          }
          <button onClick={() => set_read_more(!read_more)}>
            {read_more ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => remove_tour(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
