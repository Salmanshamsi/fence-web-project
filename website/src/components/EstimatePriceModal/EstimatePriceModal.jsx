import { useSelector } from 'react-redux'

const EstimatePriceModal = () => {

    const TotalPrice = useSelector((state)=>state.price.totalPrice)
    const T_price = Math.ceil(TotalPrice)    
    const count = useSelector((state) => state.allCartData.value);

  return (
     <div className='border font-semibold  h-14 w-64 items-center m-4 flex p-5 bg-slate-100 rounded-lg opacity-90' >
            {`Estimated Price : $ ${T_price*count}`}
      </div>
  )
}

export default EstimatePriceModal
