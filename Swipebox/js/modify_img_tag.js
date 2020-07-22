$(document).ready(function(){
    $('.post-content').find('img').each(function(index){
        const self=$(this);
        self.replaceWith(`
            <a href="${self.attr('src')}" title="${self.attr('title')}" class="swipebox"><img src="${self.attr('src')}" alt="${self.attr('alt')}"></a>
            `);
    })
    $('.swipebox').swipebox();
});
