import {  fetchId } from '@/components/Api/restApi';
import CardInfo from '@/components/CardInfo/CardInfo';
import HederID from '@/components/HederID/HederID';
import React, { useState } from 'react'

const CardOne = ({post}) => {
 const [param , setParam] = useState([])
console.log(post);
  return (
    <div>
      <div>
        <HederID/>
      </div>
      <div>
        <CardInfo post={post}/>
      </div>
    </div>
  )
}

export default CardOne;

export async function getServerSideProps({ params: {id}} ){
    const post = await fetchId(id)

    return{
props: {
post: post || null, 
},
    };

   
}