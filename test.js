let oauth = require('./index')

oauth.getToken({
    client_id: '123',
    client_secret: '123',
    code: '123',
    redirect_uri: '123'
}).then(data => {
    console.log(data)
})

oauth.getUser({
    access_token: '123'
}).then(data => {
    console.log(data)
})