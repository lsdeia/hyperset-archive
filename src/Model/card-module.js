export default{
    emits:[],
    props: ['card'],
    data: function(){
        return{
        }
    },
    methods:{
        clicked:function () {
            
        }
    },
    template:`
    <div v-bind:style="{margin:'20px', border: '2px solid black', color: 'red', fontSize: '20px' }">{{card}}</div>
    `
}