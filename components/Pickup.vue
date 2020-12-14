<template>
    <div class="pickup_container">
        <div v-for="(item, index) in pickup_items"
            :key="item.url"
            :id="'pickup_item'+index"
            class="pickup"
            @click="pick(item.word, item.url)"
        >
            <img :src="item.url" :alt="item.word" width="200px">
            <label>{{item.word}}</label>
        </div>
    </div>
</template>
<script>
import firebase from '@/plugins/firebase'

export default {
    data(){
        return{
            pickup_items: [],
        }
    },
    mounted(){
        // for(var i = 0; i < 10; i++){
        //     this.pickup_items.push({
        //         url: require("@/assets/noImage.png"),
        //         word: ""
        //     })
        // }
        const db = firebase.firestore()
        const images = db.collection('images').orderBy('timestamp', 'desc').limit(10)
        images.get().then((docs)=>{
            docs.forEach((doc)=>{
                this.pickup_items.push({
                    word: doc.data().word,
                    url: doc.data().url,
                })
            })
        })
    },
    methods: {
        pick(word, url){
            let data = {
                url: url,
                word: word
            }
            this.$emit('result_from_pickup', data)
        }
    }
}
</script>
<style lang="scss" scoped>
    $left: -5, 20, 10, 30, 40, 0, 55, 85, 60, 80;
    $top: 20, 80, 10, 5, 70, 50, 0, 60, 75, 20;


    .pickup_container{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
        .pickup{
            position: absolute;
            z-index: 100;
            cursor: pointer;
            animation: horizontal 1s ease-in-out infinite alternate;
            img{
                border-radius: 10px;
                animation: vertical 1s ease-in-out infinite alternate;
            }
        }
        @for $i from 0 to 10{
            #pickup_item#{$i} {
                left: nth($left, $i+1)+vw;
                top: nth($top, $i+1)+vh;
                animation-delay: #{$i}+s;
                img{
                    animation-delay: #{$i}+s;
                }
                label{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    text-shadow: 1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff;
                }
            }
        }
    }

    @keyframes horizontal{
        0% { transform:translateX( -3px); }
        100% { transform:translateX(  0px); }
    }
    @keyframes vertical {
        0% { transform:translateY(-10px); }
        100% { transform:translateY(  0px); }
    }
</style>
