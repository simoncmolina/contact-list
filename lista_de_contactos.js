let contactList = ["Simón Coral","Pedro Garcés","Sergio Castañeda"];


function añadirContacto(nuevoContacto){
    contactList.push(nuevoContacto);
    return contactList; 

}
function eliminarContacto(){
    contactList.pop();
    return contactList;

}
function imprimirLista(){
    return contactList;
}

console.log(contactList);
console.log(añadirContacto("Sebastian Espinosa"));
console.log(eliminarContacto());
console.log(imprimirLista());