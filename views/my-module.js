export default{
    data:function () {
        return {
            yes:"zbii"
        }
    },
    methods:{
        myMethod: function(){
            this.yes+=" la mouche"
            return yes
        }
    },
    template:`
        <h2>MyModule</h2>
        <span>{{this.myMethod()}}</span>
    `
}