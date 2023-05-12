let contactList = ["Simón Coral","Pedro Garces","Silvio Moreno"];

function añadirContacto(nuevoContacto){
    contactList.push(nuevoContacto);
    return contactList;

}
function eliminarContacto(){
    contactList.pop();
    return contactList;

}
function imprimirLista(){
    console.log(contactList);
    return contactList;
}

console.log(contactList);
console.log(añadirContacto("Tomas Cuervo"));
console.log(eliminarContacto());
console.log(imprimirLista());