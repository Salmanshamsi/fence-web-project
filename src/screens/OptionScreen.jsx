import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MaterialCard from "../components/MaterialRenderingCards/MaterialRenderingCards";
import json_data from "../assets/optionsData/optionsData.json"
import MaterialFence from "../components/Material_Fence_Table/Material_Fence_Table";


const OptionScreen = () => {
  return (
    <div className='flex flex-col' >     
    <div>
      <Navbar/>
    </div>
    <div className='w-full flex lg:mt-28 mt-40 lg:flex-row flex-col-reverse '>
        <div className='lg:w-6/12 w-full h-full px-2 mt-10'>
          <div className='h-8 text-green-600 flex w-full items-center justify-start ' >
           <p className=''>  Select a type and click continue ?</p>
          </div>
          <div className='lg:h-96 h-full overflow-scroll' >
                <MaterialCard Data={json_data} _Route={"option"} />
          </div>  
        </div>
        <div className='w-full h-full  border lg:mt-0 mt-10 lg:p-10'>
          <MaterialFence/>
        </div>
    </div>
</div>
  );
};

export default OptionScreen;
