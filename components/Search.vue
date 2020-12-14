<template>
    <div class="search_container">
        <input class="search_box" v-model="word" placeholder="word">
        <button class="search_botton" type="button" @click="search">search</button>
    </div>
</template>
<script>
import firebase from '@/plugins/firebase'

export default {
    data(){
        return{
            word: ""
        }
    },
    methods: {
        search(){
            const db = firebase.firestore()
            let images = db.collection('images').where('word', '==', this.word).orderBy('vote', 'desc').limit(1)
            images.get()
            .then((docs)=>{
                if(docs.size === 0){
                    this.$emit('result_from_search', {
                        word: this.word,
                        url: undefined
                    })
                }else{
                    docs.forEach((doc)=>{
                        let data = {
                            url: doc.data().url,
                            word: doc.data().word
                        }
                        this.$emit('result_from_search', data)
                    })
                }
            })
            .catch((e)=>{
                console.log(e)
            })
        },
    },
}
</script>
<style lang="scss" scoped>
    .search_box{
        width: 100%;
    }
    .search_button{
    }
</style>
