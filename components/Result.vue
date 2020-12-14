<template>
    <div class="result_container">
        <p v-if="noImage===false" style="color:white">Is this "{{this.word}}"?</p>
        <p v-if="noImage===true" style="color:white">
            Sorry. This word don't have any impression yet.
            Please click "other" and vote some images.
        </p>
        <div class="image">
            <img v-if="noImage===true" src="@/assets/noImage.png" alt="noImage" width="100%">
            <img v-if="noImage===false" :src="url" alt="result" width="100%">
        </div>
        <div class="button">
            <button v-if="noImage===false" type="button" @click="vote(url)">agree</button>
            <button v-if="noImage===false" type="button" @click="suggest">disagree</button>
            <button v-if="noImage===true || show['suggest']===true" type="button" @click="suggestByGoogle">other</button>
        </div>
        <Suggest
            v-if="show['suggest']"
            :word="word"
            :voted="voted"
            :suggested_items="suggested_items"
        ></Suggest>
    </div>
</template>
<script>
import firebase from '@/plugins/firebase'
import Suggest from '~/components/Suggest.vue'

export default {
    components: { Suggest },
    data(){
        return {
            suggest_more: false
        }
    },
    props:[
            'word',
            'url',
            'voted',
            'suggested_items',
            'show',
            'noImage'
    ],
    methods: {
        vote(url) {
            if(this.voted[url] === true){
                alert("You've already voted this image!")
                return
            }
            this.voted[url] = true
            const db = firebase.firestore()
            this.sha256(url).then((hash)=>{
                let image = db.collection('images').doc(hash)
                image.get()
                .then((doc)=>{
                    image.update({
                        vote: doc.data().vote+1,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                    alert("Thank you for voting!")
                })
                .catch((e)=>console.log(e))
            })
        },
        suggest(){
            if(this.show['suggest'] === true) return
            const db = firebase.firestore()
            db.collection('images').where('word', '==', this.word).get()
            .then((docs)=>{
                docs.forEach((doc)=>{
                    this.suggested_items.push({
                        url: doc.data().url
                    })
                })
                this.showSuggest()
            })
            .catch((e)=>console.log(e))
        },
        async suggestByGoogle(){
            //push to suggested items
            if(this.show['suggest_more'] === true) return
            if(this.word === "") return
            this.suggested_items.splice(0)
            var count = 0
            const cheerio = require('cheerio')
            if(this.word === "") return
            const response = this.$axios.$get("/api", {
                params: {
                    q: this.word,
                    tbm: "isch"
                }
            }).then((res)=>{
                const $ = cheerio.load(res)
                $("img").each((index, element)=>{
                    var url = element.attribs['data-src']
                    console.log(url)
                    if(url !== undefined){
                        this.suggested_items.push({
                            url: url
                        })
                    }
                })
                this.showSuggest()
            }).catch((e)=>console.log(e))
            this.show['suggest_more'] = true
        },
        showSuggest(){
            if(this.suggested_items.length > 0) this.show['suggest'] = true
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
.result_container{
    width: 500px;
    height: 100%;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .image{
        img{
            border-radius: 10px;
        }
    }
}
::-webkit-scrollbar{
    display: none;
}
</style>
