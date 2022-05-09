const baseUrl = "http://itschrisking.com/?rest_route=/wp/v2";
const password = import.meta.env.WP_PASSWORD;
console.log(password);

const getJwt = async () => {
  return await fetch(
    `http://www.itschrisking.com/?rest_route=/simple-jwt-login/v1/auth&email=chris.aa.king@gmail.com&password=${password}`,
    { method: "post" }
  )
    .then((res) => res.json())
    .then((obj) => obj.data.jwt && obj.data.jwt);
};

export const getPosts = async () => {
  console.log("Querying server for posts");

  return await fetch(`${baseUrl}/posts&JWT=${await getJwt()}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};

export const getPages = async () => {
  console.log("Querying server for pages");

  return await fetch(`${baseUrl}/pages&JWT=${await getJwt()}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};
