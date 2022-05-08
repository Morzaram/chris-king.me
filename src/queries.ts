const baseUrl = "http://itschrisking.com/?rest_route=/wp/v2";
const password = import.meta.env.WP_PASSWORD;
const getJwt = async () => {
  return await fetch(
    `http://www.itschrisking.com/?rest_route=/simple-jwt-login/v1/auth&email=chris.aa.king@gmail.com&password=${password}`,
    { method: "post" }
  )
    .then((res) => res.json())
    .then((obj) => obj.data.jwt && obj.data.jwt);
};

export const getPosts = async () => {
  return await fetch(`${baseUrl}/posts&JWT=${await getJwt()}`).then((res) =>
    res.json()
  );
};

export const getPages = async () => {
  return await fetch(`${baseUrl}/pages&JWT=${await getJwt()}`).then((res) =>
    res.json()
  );
};