console.log('JS File');

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log('jQuery is ready'); 
    } else {
        // jQuery is not loaded
        console.log('jQuery is no ready');   
    }
}

