var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
   kittens.push(name)
   console.log(kittens)
    return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  console.log(kittens)
   return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name)
  console.log(kittens)
   return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
  console.log(kittens)
   return kittens;
}
function appendKitten(name){
  return [...kittens, name]

}
function prependKitten(name){
  return [name,...kittens]
}
function removeLastKitten(){
 kittens.slice(0,array.length-1)
 return kittens
}
function removeFirstKitten(){

}
