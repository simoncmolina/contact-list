let contactList = [{
    id:"1", 
    nombre: "Simón", 
    apellido: "Coral",
    telefono: "3166264678",
    ubicaciones: {ciudad: "Cali", direccion: "Centro"}
},
{
    id: "2",
    nombre: "Pedro",
    apellido: "Garcés",
    telefono: "3154567876",
    ubicaciones: {ciudad: "Medellin", direccion: "Sur"}
},
{
    id: "3",
    nombre: "Jairo",
    apellido: "García",
    telefono: "3146578785",
    ubicaciones: {ciudad: "Bogotá", direccion: "Norte"}
}
];

function añadirContacto(obj){
    contactList.push(obj);
    return contactList; 

}
function eliminarContacto(){
    contactList.pop();
    return contactList;

}
function imprimirLista(){
    return contactList;
}

añadirContacto({id: "4", nombre: "Sonia", apellido: "Casas", telefono: "3148977654", ubicaciones:{ciudad: "Pereira", direccion: "Oeste"}});
console.log(contactList);
console.log("El Contacto a Eliminar es: " + contactList[contactList.length-1].nombre);
console.log(eliminarContacto());
