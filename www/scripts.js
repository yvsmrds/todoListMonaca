var todo = {}

document.addEventListener('init', function(event){
    
    var view = event.target.id;
    
    if(view === 'menu' || view = 'list'){
        todo[view + 'Init'](event.target);
    }
});

todo.listInit = function(target){
    
    this.list = document.querySelector('#todo-list');
    
    target.querySelector('#splitter-toggle').addEventListener('click', function(){
        document.querySelector('#splitter-menu').open();
    });
}

