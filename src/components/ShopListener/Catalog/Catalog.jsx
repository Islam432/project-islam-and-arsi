

import { dataStrapi,dataStrapiId } from "@/components/Api/restApi";
import Card from "@/components/UI/Card/Card";
import styles from './Catalog.module.css' 
import { getImageUrl } from "@/helper/image";
import React, { use, useEffect, useState } from "react";

const Catalog = () => {
const  [catalogs, setCatalogs] = useState([])
const  [catalogsONe, setCatalogsOne] = useState([])

useEffect(() => {
dataStrapi().then((res) => {
    setCatalogs(res.data)
})
},[])
// useEffect(() => {
// dataStrapiId().then((res) => {
//     setCatalogsOne(res.data)
// })
// },[])

console.log(catalogs)

  return (

    <div className={styles.cont}>
      
        <div className={styles.catalogs}>
             {catalogs.map((item) => {
                return    <Card  
                key={item.id}
                name={item.Name}
                price={item.Price}
                type={item.Type}
                img={getImageUrl(item.Picture.url)}
                id={item.id}/>
            })} 
        </div>
    </div>
  )
}

export default Catalog