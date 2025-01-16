exports.demo=(req,res)=>{
        let nameValue = req.params.name;
        let cityValue = req.params.city;
        res.status(200).json({
                name : nameValue,
                city : cityValue
        })
}
exports.demo2=(req,res)=>{

        let name =req.body['name'];
        let age =req.body['age'];
        let email =req.body['email'];
        res.status(200).json({
                name:name,
                email:email,
                age:age
        });
}
exports.demo3=(req,res)=>{
        
        let token = req.headers['token'];
        res.status(200).json({
                token:token
        });
}

exports.demo4=(req,res)=>{
        let Cookie = req.cookies['Cookie_1']
        res.status(200).json({
                Cookie:Cookie
        });

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
