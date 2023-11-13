import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./MaterailDesiign.css"

const MaterialsDesigns = () => {
  const textValue = useSelector((state) => state.selecteddesigns.designText);
  const imgValue = useSelector((state) => state.selecteddesigns.imgSource);
  const gateDetails = useSelector((state) => state.selecteddesigns.gateDetails);

  const [data, setData] = useState({
    img: imgValue || 'https://designit.menards.com/media/Fence/selection/type/vinyl.jpg',
    txt: textValue || 'Wood Picket',
  });

  useEffect(() => {
    setData({
      img: imgValue || 'https://designit.menards.com/media/Fence/selection/type/vinyl.jpg',
      txt: textValue || 'Wood Picket',
    });
  }, [imgValue, textValue]);

  return (
    <div className='mainDataDiv'>
      <h1 className='woodHeading'>
        {data.txt}
      </h1>
      <hr />
      <ul className='ul_li'>
        <li>{gateDetails.tx1}</li>
        <li>{gateDetails.tx2}</li>
        <li>{gateDetails.tx3}</li>
        <li>{gateDetails.tx4}</li>
      </ul>
      <img
        src={data.img}
        className='dataImg'
        alt=""
      />
    </div>
  );
};

export default MaterialsDesigns;
