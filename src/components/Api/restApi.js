import ky from "ky";
import * as qs from "qs";

const strapi = ky.create({ prefixUrl: process.env.NEXT_PUBLIC_STRAPI_API });

export const dataStrapi = () => {
  const query = qs.stringify({
    populate: {
      Picture: true,
    },
  });
  return strapi.get("catalogs?" + query).json();
};
export const SevenData = () => {
    const query = qs.stringify({
       
      page: 1,
        pageSize: 8,
    })
    return strapi.get("catalogs?" + query).json();
}