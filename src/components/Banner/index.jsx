// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h3>
        <p>
          Bringing the grocery store to your doorstep, say goodbye to spending fuel on groceries.
        </p>
        <button type="button" className="btn">
          <a href="#products">shop now</a>
        </button>
      </div>
    </section>
  );
}
