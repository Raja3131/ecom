import React from "react";
import { Product, FooterBanner, HeroBanner } from '../components';

const index = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        {" "}
        <h2>Best Selling Products</h2>
        <p>Speakers of many Variation</p>
      </div>
      <div>
        {
          ['Product1','Product2','Product3'].map((product)=>product)
        }
        </div>
        {""}



        <FooterBanner />
    </>
  );
};

export default index;
