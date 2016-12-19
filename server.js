var koa = require('koa');

var app = koa();

var requestTime= app.use();

app.use(function *(){
    console.log(this.request);
    this.body = 'hos';
    if(this.url == '/'){
       this.body = 'this is index page';
    }else if(this.url == '/date'){
       this.body = new Date();
    }else{
        this.body = {name:'bb'};
    }
});

app.listen(300);