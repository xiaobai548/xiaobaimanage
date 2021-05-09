import Mock, { Random } from 'mockjs'
let List = [];
export default{
    
    getUserData:()=>{
        for (let i = 0; i < 30; i++) {
            List.push(
              Mock.mock({
                  name:Mock.mock('@cname'),
                  age:Mock.Random.integer(15,90),
                  sex:Mock.Random.integer(0,1),
                  birth:Random.datetime('yyyy-MM-dd'),
                  addr:Mock.mock('@county(true)'),
              })
            );
          }
        return {
            code:2000,
            data:{
                List
            }
        }
    }
}