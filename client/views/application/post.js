Template.post.helpers({
    setAuthor: function(){
        return '<b>Bibi</b>';
    }
});
Template.post.events({
    'click .post':function(e){
    alert("Vous avez cliqué")
}
});