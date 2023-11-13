import { useSelector } from 'react-redux'

const EstimatePriceModal = () => {

    const TotalPrice = useSelector((state)=>state.price.totalPrice)    

  return (
     <div className='border font-semibold  h-14 w-64 items-center flex p-2 bg-slate-100 rounded-lg opacity-90' >
            {`Estimated Price : $ ${TotalPrice}`}
      </div>
  )
}

export default EstimatePriceModal
