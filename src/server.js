
//servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} =require('./page')
//connfig nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noChache: true,
})

server.
//receber os dados do body
//configurar arquivos estaticos(css, scripts,img)
use(express.urlencoded({ extended: true }))
.use(express.static("public"))
//rotas da app


.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do seerver
.listen(5500)


