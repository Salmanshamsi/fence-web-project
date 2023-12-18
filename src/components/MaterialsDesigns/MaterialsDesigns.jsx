import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MaterialsDesigns = () => {

  const Data = useSelector((state) => state.selectedMaterials.Type_M[0]);

  return (
    <div className=''>
      <h1 className='text-xl font-bold'>
        {Data?.txt}
      </h1>
      <hr />
      <ul className='text-base flex flex-col pt-2'>
        <li>{Data?.Details?.txt_1}</li>
        <li>{Data?.Details?.txt_2}</li>
        <li>{Data?.Details?.txt_3}</li>
        <li>{Data?.Details?.txt_4}</li>
      </ul>
      <img
        src={Data?.img}
        className='bg-contain bg-center h-64 w-full'
        alt=""
      />
    </div>
  );
};

export default MaterialsDesigns;
