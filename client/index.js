// const fetch = require('@replit/node-fetch');
// const { url } = require('inspector');
// const { URLSearchParams } = require('url');

export default {
    getToken: async function (data) {
    let returnSt
        const params = new URLSearchParams();
params.append('client_id', data.client_id);
params.append('client_secret', data.client_secret);
params.append('grant_type', 'authorization_code');
params.append('code', data.code);
params.append('redirect_uri', data.redirect_uri);

let x = await fetch("https://discord.com/api/oauth2/token", {
  method: "post",
  body: params,
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
})
let y = await x.text()
// console.log(y)
// .then(res => res.json())
// .then(json => {
// //   console.log(json);
//     // return json
//     returnSt = 'json'
// })
return y
    },
getUser: async function (data) {
    let returnSt
      let x = await fetch("https://discord.com/api/users/@me", {
      headers: { "authorization": `Bearer ${data.access_token}` }
    })
    let y = await x.text()
    // console.log(y)
    return y
    // .then(res2 => res2.json())
    // .then(json2 => {
    // // return json2
    // returnSt = 'json2'
    //     })
    }
}