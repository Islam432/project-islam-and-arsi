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
export const fetchId = (id) => {
  const query = qs.stringify({
    populate: {
      Picture: true,
    },
  });
  return strapi.get(`catalogs/${id}?` + query).json();
};
export const SevenData = ({ start = 0, limit = 8 }) => {
  const query = qs.stringify({
    pagination: {
      start,
      limit,
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
export const WigData = () => {
  const query = qs.stringify({
    filters: {
      Type: {
        $eq: "Vegetable",
      },
    },

    populate: {
      Picture: true,
    },
  });
  return strapi.get("catalogs?" + query).json();
};

export const DataPeople = () => {
  const query = qs.stringify({
    pagination: {
      page: 1,
      pageSize: 3,
    },
    populate: {
      image: true,
    },
  });

  return strapi.get("peoplee?" + query).json();
};
export const DataPeopleAll = () => {
  const query = qs.stringify({

    populate: {
      image: true,
    },
  });

  return strapi.get("peoplee?" + query).json();
};
