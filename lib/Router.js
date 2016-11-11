Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/register',{
    name:'register'
});
Router.route('/login',{
    name:'login'
});
Router.route('/post/:_id',{
    name:"post",
    data:function(){
        return{
            id:this.params._id
        }
    }
});
Router.route('/add/:num1/:num2',{
    name:"add",
    template: "calc",
    data:function(){
        var num1 = parseInt(this.params.num1);
        var num2 = parseInt(this.params.num2);
        return {
            res: num1 + num2
        };
    }
});
Router.route('/posts', {
    name: "posts",
    data: function(){
        return {
            posts: [
                {
                    title: "Premier post",
                    hide: true
                },
                {
                    title: "Second post",
                    hide: false
                },
                {
                    title: "Troisième post",
                    hide: false
                },
            ]
        };
    }
});
Router.route('/',{
    name: "home",
    data: function(){
        var posts = Posts.find();
        return {
            posts: posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});