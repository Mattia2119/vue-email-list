const app = new Vue (

    {
      el: "#app",

      data: {
        
      },

      mounted(){
       for(let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (response) {
            // handle success
            listaMail.push(response.data.response);
        
           })
        }
    }
});

const listaMail = [];

console.log (listaMail);