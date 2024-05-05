import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'LoginAdmin',
        component:()=>import('@/view/admin/LoginAdmin.vue'),
        meta:{
            index:1,
            title:'登录'
        }
    },
    {
        path:'/LoginLogin',
        name:'LoginLogin',
        component:()=>import('@/view/LoginLogin.vue'),
        meta:{
            index:2,
            title:'首页'
        },
        children:[
            {
                path:'/',
                name:'SouYe',
                component:()=>import('@/view/content/Home/SouYe.vue'),
                meta:{
                    index:3,
                    title:'主页'
                }
            },
            {
                path:'/HomeHome',
                name:'HomeHome',
                component:()=>import('@/view/content/HomeHome.vue'),
                meta:{
                    index:4,
                    title:''
                },
            },
            {
                path:'/WeightScalage/WeightData',
                name:'WeighScalage',
                component:()=>import('@/view/content/WeighScalage/WeighScalage.vue'),
                meta:{
                    index:5,
                    title:'称重数据'
                },
            },
            {
                path:'/WeightScalage/WeightTotal',
                name:'WeighScalage',
                component:()=>import('@/view/content/WeighScalage/WeightTotal.vue'),
                meta:{
                    index:6,
                    title:'过磅统计'
                },
            },
            {
                path:'/data/ShouHuo',
                name:'ShouHuo',
                component:()=>import('@/view/content/data/ShouHuo.vue'),
                meta:{
                    index:7,
                    title:'收获单位'
                },
            },
            {
                path:'/data/CarCommon',
                name:'CarCommon',
                component:()=>import('@/view/content/data/CarCommon.vue'),
                meta:{
                    index:8,
                    title:'车辆管理'
                },
            },
            {
                path:'/data/CarReservation',
                name:'CarReservation',
                component:()=>import('@/view/content/data/CarReservation.vue'),
                meta:{
                    index:9,
                    title:'车辆预约'
                },
            },
            {
                path:'/data/DbShebei',
                name:'DbShebei',
                component:()=>import('@/view/content/data/DbShebei.vue'),
                meta:{
                    index:9,
                    title:'地磅设备'
                },
            },
            {
                path:'/data/SfShezhi',
                name:'SfShezhi',
                component:()=>import('@/view/content/data/SfShezhi.vue'),
                meta:{
                    index:10,
                    title:'收费设置'
                },
            },
            {
                path:'/data/WzFenlei',
                name:'WzFenlei',
                component:()=>import('@/view/content/data/WzFenlei.vue'),
                meta:{
                    index:11,
                    title:'物资分类'
                },
            },
            {
                path:'/account/GlZhanghu',
                name:'GlZhanghu',
                component:()=>import('@/view/content/account/GlZhanghu.vue'),
                meta:{
                    index:12,
                    title:'账户管理'
                },
            },
            {
                path:'/account/QyXinxi',
                name:'QyXinxi',
                component:()=>import('@/view/content/account/QyXinxi.vue'),
                meta:{
                    index:13,
                    title:'企业信息'
                },
            },
        ],
    },
   
  
   
   
]
 const router= new VueRouter({
    mode:'hash',
    routes
 })
  export default router