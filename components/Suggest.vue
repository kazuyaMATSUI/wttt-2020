<template>
    <div class="suggest_container">
        <no-ssr>
            <div class="suggest">
                <div class="suggest_item" 
                    v-for="(item, index) in suggested_items"
                    :key="item.url"
                    :src="item.url"
                    >
                        <img :src="item.url" alt="suggested_image">
                        <input :id="'suggest'+index" :value="item.url" type="checkbox" v-model="selected_items">
                </div>
            </div>
            <button @click="voteSelection">vote</button>
        </no-ssr>
    </div>
</template>
<script>
import firebase from '@/plugins/firebase'

export default {
    data(){
        return{
            selected_items: []
        }
    },
    props:[
            'word',
            'voted',
            'suggested_items',
    ],
    methods:{
        voteSelection(){
            let word = this.word
            let votecount = 0
            const db = firebase.firestore()
            this.selected_items.forEach((url)=>{
                if(this.voted[url] === true){
                    alert("You've already voted this image!")
                }else{
                    this.voted[url] = true
                    votecount += 1
                    this.sha256(url).then((hash)=>{
                        let image = db.collection('images').doc(hash)
                        image.get()
                        .then((doc)=>{
                            image.update({
                                vote: doc.data().vote+1
                            })
                        })
                        .catch((e)=>{
                            db.collection('images').doc(hash).set({
                                url: url,
                                word: word,
                                vote: 1,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp()
                            })
                        })
                    })
                }
            })
            if(votecount > 0) alert("Thank you for voting!")
        },
        async sha256(text){
            const uint8  = new TextEncoder().encode(text)
            const digest = await crypto.subtle.digest('SHA-256', uint8)
            return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
        }
    }

}
</script>
<style lang="scss" scoped>
.suggest_container{
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    .suggest {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .suggest_item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1vw 0;
            img{
                border-radius: 10px;
            }
        }
    }
    
}
    
</style>
