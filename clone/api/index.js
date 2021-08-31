const app =require('express')()
const PORT = 8000;
let posts = require('./post.json')
app.get('/posts/', (req, res) => {
    res.send(JSON.stringify(posts));
})
app.listen(PORT, () =>{
    console.log("App is running on port: ${PORT}")
})