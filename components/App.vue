<template>
    <div class="container">
        <Pickup @result_from_pickup="result_from_pickup($event, result)"></Pickup>
        <div class="main">
            <div v-if="introShow">
                <h1>We Think That This</h1>
                <p>This is an web app to seak a common impression for word.</p>
                <p>Let's try searching or clicking a pickup-image.</p>
                <p>And you can vote some images which you think it's appropriate for</p>
                <p>representation of word.</p>
            </div>
            <Search class="search" @result_from_search="result_from_search($event, result)"></Search>
            <Result class="result"
                v-if="show['result']"
                :url="url"
                :word="word"
                :voted="voted"
                :suggested_items="suggested_items"
                :show="show"
                :noImage="noImage"
            ></Result>
        </div>
    </div>
</template>
<script>
import Search from '~/components/Search.vue'
import Result from '~/components/Result.vue'
import Pickup from './Pickup.vue'

export default {
    components: { Search, Result, Pickup},
    data(){
        return{
            url: "",
            word: "",
            noImage: false,
            result: {},
            show: {result: false, suggest: false, suggest_more: false},
            voted: {},
            suggested_items: [],
            introShow: true,
        }
    },
    methods: {
        result_from_search(result) {
            this.init()
            if(result.url == undefined){
                this.noImage = true
                this.word = result.word
            }else{
                this.noImage = false
                this.url = result.url
                this.word = result.word
            }
            this.introShow = false
        },
        result_from_pickup(result){
            this.init()
            if(result.url == require("@/assets/noImage.png")){
                this.noImage = true
                this.word = result.word
            }else{
                this.noImage = false
                this.url = result.url
                this.word = result.word
            }
            this.introShow = false
        },
        init(){
            this.suggested_items.splice(0)
            this.show['result'] = true
            this.show['suggest'] = false
            this.show['suggest_more'] = false
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .main{
            width: 70vw;
            height: 50vh;
            padding: 1vw 1vw;
            background-color: rgb(26, 37, 71);
            border-radius: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 200;
            .search{
                width: 20vw;
            }
            .result{
                width: 20vw;
            }
            .modal{
                margin: 0;
            }
        }
    }
</style>
