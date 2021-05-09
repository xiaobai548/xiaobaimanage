import Mock from 'mockjs'
let List = [];
export default{
    
    getHomeData:()=>{
        for (let i = 0; i < 7; i++) {
            List.push(
              Mock.mock({
                vue: Mock.Random.float(100, 8000, 0, 2),
                wechat: Mock.Random.float(100, 8000, 0, 2),
                ES6: Mock.Random.float(100, 8000, 0, 2),
                Redis: Mock.Random.float(100, 8000, 0, 2),
                React: Mock.Random.float(100, 8000, 0, 2),
                springboot: Mock.Random.float(100, 8000, 0, 2)
              })
            );
          }
        return {
            code:2000,
            data:{
                videoData:[
                    {
                        name:'SpringBoot',
                        value:Mock.Random.float(1000,10000,0,2),
                        today:Mock.Random.integer(20,40),
                        month:Mock.Random.integer(400,1000),
                        total:Mock.Random.integer(1000,5000),
                    },
                    {
                        name:'java',
                        value:Mock.Random.float(1000,10000,0,2),
                        today:Mock.Random.integer(20,40),
                        month:Mock.Random.integer(400,1000),
                        total:Mock.Random.integer(1000,5000),
                    },
                    {
                        name:'html',
                        value:Mock.Random.float(1000,10000,0,2),
                        today:Mock.Random.integer(20,40),
                        month:Mock.Random.integer(400,1000),
                        total:Mock.Random.integer(1000,5000),
                    },
                    {
                        name:'css',
                        value:Mock.Random.float(1000,10000,0,2),
                        today:Mock.Random.integer(20,40),
                        month:Mock.Random.integer(400,1000),
                        total:Mock.Random.integer(1000,5000),
                    },
                    {
                        name:'javascript',
                        value:Mock.Random.float(1000,10000,0,2),
                        today:Mock.Random.integer(20,40),
                        month:Mock.Random.integer(400,1000),
                        total:Mock.Random.integer(1000,5000),
                    },
                    {
                        name:'ES6',
                        value:Mock.Random.float(1000,10000,0,2),
                        today:Mock.Random.integer(20,40),
                        month:Mock.Random.integer(400,1000),
                        total:Mock.Random.integer(1000,5000),
                    }
                ],
                orderData: {
                    date: [
                      "20191001",
                      "20191002",
                      "20191003",
                      "20191004",
                      "20191005",
                      "20191006",
                      "20191007"
                    ],
                    data: List
                  },
                weekData:[
                    {
                        date:'星期一',
                        value:Mock.Random.integer(20,40),
                    },
                    {
                        date:'星期二',
                        value:Mock.Random.integer(20,40),
                    },
                    {
                        date:'星期三',
                        value:Mock.Random.integer(20,40),
                    },
                    {
                        date:'星期四',
                        value:Mock.Random.integer(20,40),
                    },
                    {
                        date:'星期五',
                        value:Mock.Random.integer(20,40),
                    },
                    {
                        date:'星期六',
                        value:Mock.Random.integer(20,40),
                    },
                    {
                        date:'星期日',
                        value:Mock.Random.integer(20,40),
                    },
                ]
            }
        }
    }
}