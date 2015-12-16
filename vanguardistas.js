$(document).ready(function(){
    /*
    $('ul.ul-toggle li').click(
        function(event) {
          $('ul', this).toggle("fast");
          event.stopPropagation();
      });
    $('ul.ul-toggle').click();
    */
    
    function highlight_terms() {
        var van_hash_glossary_term = location.hash.substring(1);
        if (van_hash_glossary_term.substring(0, 5) === 'term-') {
            if ($(this)[0].id === van_hash_glossary_term) {
                $('dt#' + $(this)[0].id).addClass('highlighted');
            }
            else {
                
                $('dt').each(function () {
                    $('dt#' + $(this)[0].id).removeClass('highlighted');
                    var other_terms = $('dt#' + $(this)[0].id + ' span');
                    for (var i = 0; i < other_terms.length; i = i + 1) {
                        if (other_terms[i].id === van_hash_glossary_term) {
                            $('dt#' + $(this)[0].id).addClass('highlighted');
                        }
                    }
                })
            };
        };
    };
    
    highlight_terms();
    
    $(window).bind('hashchange', function() {
        highlight_terms();
    });

});
