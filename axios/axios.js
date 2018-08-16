let promise = axios.get(https://raw.githubusercontent.com/orlandocaraballo/sei/master/outlines/18-working-with-ajax/json/person-1.json);

promise.then(function(response){
  let p = document.createElement("p")

  p.innerHTML = response.data['fist-name']

  
})