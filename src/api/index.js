import ky from "ky";

export const strapiAPI = ky.create({
  prefixUrl: import.meta.env.VITE_STRAPI_API,
});

export const getUserInfo = (token) => {
  return strapiAPI
    .get("users/me?populate=role", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .json();
};

export const loginUser = (data) => {
  return strapiAPI.post("auth/local", { json: data }).json();
};

export const getData = () => {
  return strapiAPI.get("item?populate=deep").json();
};

export const changeData = (data) => {
  return strapiAPI
    .put("item?populate=deep", { json: { ItemData: data } })
    .json();
};
