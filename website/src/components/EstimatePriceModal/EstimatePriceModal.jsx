import { useState } from 'react';
import { useSelector } from 'react-redux';

const EstimatePriceModal = () => {
  const TotalPrice = useSelector((state) => state.price.totalPrice);
  const T_price = Math.ceil(TotalPrice);
  const count = useSelector((state) => state.allCartData.value);
  const [show, setShow] = useState(true);
  const [point, setPoint] = useState('<');

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
            setShow(!show); // Toggle the show state
            setPoint(show ? '>' : '<'); // Set point based on the updated show state
        }}
        className="h-14 w-10 items-center justify-center md:hidden flex p-5 bg-slate-100 rounded-r-none rounded-md opacity-90"
      >
         <p><i class={`fa-solid ${point===">" ? "fa-angle-right" : "fa-angle-left"} `}></i></p>
      </div>
      <div className={`border font-semibold ${show ? 'flex' : 'hidden'}h-14 w-64 md:text-base text-sm items-center rounded-l-none rounded-md p-5 bg-slate-100  opacity-90`}>
        {`Estimated Price : $ ${T_price * count}`}
      </div>
    </>
  );
};

export default EstimatePriceModal;
