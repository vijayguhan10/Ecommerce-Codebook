import React from 'react'
import { useEffect } from 'react'
const DynamicTitles = ({title}) => {
    useEffect(()=>{
        document.title=`${title}-codebook`;
    },[title])
  return null;
}

export default DynamicTitles