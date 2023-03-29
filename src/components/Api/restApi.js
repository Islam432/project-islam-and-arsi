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
    pagination: {
      page: 1,
      pageSize: 8,
    },
    populate: {
      Picture: true,
    },
  });
  return strapi.get("catalogs?" + query).json();
};
export const ToData = () => {
  const query = qs.stringify({
    pagination: {
      page: 1,
      pageSize: 12,
    },
    populate: {
      Picture: true,
    },
  });
  return strapi.get("catalogs?" + query).json();
};
