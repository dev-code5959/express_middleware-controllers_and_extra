exports.demo=(req,res)=>{
        res.send("Hello World!");
}
exports.demo1=(req,res)=>{
        res.send("Hello World! 11");
}
exports.demo2=(req,res)=>{
        res.send("Hello World! 22 ");
}

exports.demo3=(req,res)=>{
        res.send("Hello World! 33");
}
exports.users=(req,res)=>{
        const users = [
                {
                        name:"Asif Khan",
                        email:"test@gmail.com",
                        city:"mymensignh"
                },
                {
                        name:"john ",
                        email:"john@gmail.com",
                        city:"khulna"
                },
                {
                        name:"kk Khan",
                        email:"kk@gmail.com",
                        city:"dhaka"
                },
                {
                        name:"hello Khan",
                        email:"hello@gmail.com",
                        city:"rangpur"
                },
                {
                        name:"demo ",
                        email:"demo@gmail.com",
                        city:"cottogram"
                }
        ];
        res.send(users)
}
