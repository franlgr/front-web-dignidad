<template>
    <div>
        <nav-bardefault class="naveBar"></nav-bardefault>
        <div>
            <input type="file" v-on="file">
            <input type="text" v-model="contenido.names" placeholder="Nombres">
            <input type="text" v-model="contenido.email" placeholder="Mail">
            <input type="text" v-model="contenido.text" placeholder="Mensaje">
            <button id="botonE" @click="sendMsg()">Enviar</button>
        </div>
        <footer-default></footer-default>

    </div>


</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            chat_id: "2047819373",
            contenido: {
                text: "",
                names: "",
                email: "",

            }

        }
    },
    methods: {
        sendMsg() {
            this.$axios.post('https://api.telegram.org/bot5345020457:AAF5K4979ne8sKV3B4SWuUf-0HM4SrwBm_Y/getUpdates', {
                chat_id: this.chat_id,
                // file_id: this.file_id,
                //   ctx: this.contenido.text,
                files: `Imagen: ${this.file}`,
                //   text: `Nombres: ${this.contenido.names} Mail: ${this.contenido.email} Mensaje: ${this.contenido.text}`,
                text: this.contenido.text,
            }).then((response) => {
                console.log("nuevo: ", response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>


<style>
#botonE {
    background: black;
    color: yellow;
}
</style>