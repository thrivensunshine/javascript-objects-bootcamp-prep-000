var playslist = {
  artist: "song"
}


function updatePlaylist(obj, name, song){
  let fin = Object.assign({}, obj,{[name]:song})
  return fin
}
 