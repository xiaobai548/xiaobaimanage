import Mock from 'mockjs'
import HomeApi from './home'
import UserApi from './user'
//延时
Mock.setup({
    timeout:'200-2000'
})

Mock.mock(/\/home\/getData/,'get',HomeApi)
Mock.mock(/\/user\/getData/,'get',UserApi)



