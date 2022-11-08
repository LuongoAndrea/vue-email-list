const { createApp } = Vue
createApp({
  data() {
    return{
        mails: [],
    }
  },
 created(){
    for (let i = 0; i < 10; i++) {
        this.callApi();
    }

 },
  methods:{
    callApi(){
        
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
            console.log(response.data.response)
            this.mails.push(response.data.response)
             
        })
    }
  },

}).mount('#app')