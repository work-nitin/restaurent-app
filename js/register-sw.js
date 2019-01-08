if ('serviceWorker' in navigator) {
navigator.serviceWorker
.register('/sw.js')
.catch(function(er){
  console.error(er);
});

}
