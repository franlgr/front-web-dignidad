<template>
    <div>
       {{null}} {{resultt}} {{mensaje}}
    </div>
</template>


<script>

export default {
    data(){
        return {
            mensajes:[],
            resultt:[],
            mensaje:[]

        }
        
    },
    
    mounted(){


                this.$axios.get('https://api.telegram.org/bot5345020457:AAF5K4979ne8sKV3B4SWuUf-0HM4SrwBm_Y/getUpdates', {
                        chat_id: this.chat_id,
                      
                    }).then((response) => {
                        this.resultt = response.data.result.length;

                                if(response.data.result.length !== this.resultt){
                                    console.log("hola");
                                }else{
                                    console.log("chau");
                                    this.mensaje = response.data.result[this.resultt - 1].message.text;
                                }
                        console.log('Response: =>', response);
                        // this.mensajes = response.data.result[this.resultt - 1].message.text;
                    
                    }).catch(function (error) {
                        console.log(error);
                    });
                 }
             }
                
                // this.$axios.get('https://api.telegram.org/bot5345020457:AAF5K4979ne8sKV3B4SWuUf-0HM4SrwBm_Y/getUpdates', {
                //         chat_id: this.chat_id,
                      
                //     }).then(this.resultt !== response.data.result.length) {
                //         console.log("No es igual");
                //         this.mensaje = response.data.result[this.resultt - 1].message.text;
                //     }

   
    // methods: {
        
    //     actualizarMsg(){
            
    //          this.$axios.get('https://api.telegram.org/bot5345020457:AAF5K4979ne8sKV3B4SWuUf-0HM4SrwBm_Y/getUpdates', {
    //             chat_id: this.chat_id,
               
    //         }).then((response) => {
    //             if(response.)
    //         })
    //     }

    // }
    



 


</script>


<style>
</style>