$('.fbsharelink').click( function() 
{
    var shareurl = $(this).data('shareurl');
    window.open('https://www.facebook.com/sharer/sharer.php?u='+escape(shareurl)+'&t='+document.title, '', 
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
});


$('.twitter-share-button').click( function(){
 window.open('https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.venturesity.com%2Fchallenge%2Fid%2F292&text=Venturesity%20%7C%20Up%20for%20a%20Challenge%3F&via=venturesity'+document.title, '', 
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
});