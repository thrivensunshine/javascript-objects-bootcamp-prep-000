var playslist = {
  artistName: "songTitle"
}


function updatePlaylist(obj, name, song){
  let fin = Object.assign({}, obj,{[name]:song})
  return fin
}
 