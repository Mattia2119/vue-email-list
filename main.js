const app = new Vue (

    {
      el: "#app",

      data: {
           listaMail : []
      },

      mounted(){
       for(let i = 0; i < 9; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
            // handle success
            this.listaMail.push(response.data.response);
        
           })
        }
    }
});

