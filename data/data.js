var  Mock=require("mockjs")
module.exports=[{
    route: "/api/gulp",
    handle: function(req,res,next,url){
        //id遍历
        //var datas=Mock.mock({
        //    //s属性list的值是一个数组，其中含有1到10个元素
        //    "list|1-10":[{
        //        //属性id是一个自增数，起始值为1，每次增加1
        //        "id|+1":1
        //    }]
        //})
        //2邮箱随机
        //var datas=Mock.mock({email:"@email"})
        //3星座随机
        var Random=Mock.Random
        Random.extend({
            constellation: function(date){
                var constellations=["白羊座","金牛座","双子座","巨蟹座","狮子座","天平座","歙州座"]
                return this.pick(constellations)
            }
        })
        var datas=Random.constellation()
        //4 true false 随机
        var datas=Random.boolean()
        res.writeHead(200,{
            "Content-type":"application/json;charset=UTF-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(datas));
        res.end()
    }
},{
    route: "/api/grr",
    handle: function(req,res,next,url){
        var datas = [
            {
                name:"今天好热"
            },
            {
                name:"2017年6月10日下午16点57"
            }
        ]
        res.writeHead(200,{
            "Content-type":"application/json;charset=UTF-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(datas));
        res.end()
    }
}]