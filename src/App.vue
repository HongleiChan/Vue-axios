<template>
<div>
  <input type="text" v-model="inputvalue"/>
  <button @click="sendAjax">点我</button>
  <button @click="mergeAjax">合并请求</button><br/>
  <div>响应1：{{response1}}</div> <br/>
  <div>响应2：{{response2}}</div> <br/>
  <div>代码仓库 成功创建</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      response1:'',
      response2:'',
      inputvalue:''
    }
  },
  methods:{
    sendAjax(){
      var j = this.inputvalue;
      //var p = 'location='+j;
      //var api='?key=85f86b78acb14eb6a07a803c28f1bc9b&'+ p;
      //axios有get||post||put||deleta
      this.$axios.get('',{
        params:{key:'85f86b78acb14eb6a07a803c28f1bc9b',location:this.inputvalue},
        //修改响应数据
        // transformResponse:function (data) {
        //   //就是res.data
        //   return data;
        // }
      }).then((res)=> {
        console.log(res);
        //this.response1 = res.data;
        this.response1 = JSON.stringify(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    },
    //合并请求
    //请求1 get / 请求2 post
    //this.$axios.get||post(url,[post的时候有data]，options)
    mergeAjax(){
      //var param = new URLSearchParams();
     // param.append('key=85f86b78acb14eb6a07a803c28f1bc9b','location=CN101010100')
      var api='?key=85f86b78acb14eb6a07a803c28f1bc9b&location=CN101010100';
      var q1 = this.$axios.get(api);
      // var q2 = this.$axios({
      //   method: 'post',
      //   url: api2,
      //   data:param
      // }).then((res)=>{
      //   console.log(res)
      // });
     // var q2 = this.$axios.post(api);
      // this.$axios.all([q1,q2]).then(this.$axios.spread((res1,res2)=>{
      //   this.response1 = res1.data;
      //   console.log(res1);
      //   this.response2 = res2.data;
      //   console.log(res2);
      // }))
      //   .catch(err=>{
      //     console.log(err)
      //   });
      this.$axios.post(api,'name=jack',{
        transformRequest:function (data) {
          //加工请求体数据
          return 'name=rose';
        }
      }).then(res=>{
        console.log(res);
        this.response2 = res.data;
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>
