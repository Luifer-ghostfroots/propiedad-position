// const nombre = document.getElementById("input-nombre").value;
// const apellido = document.getElementById("input-apellido");
// const nombreDeUsuario = document.getElementById("input-nombredeusuario");
// const correoElectronico = document.getElementById("input-correoelectronico");
// const contraseña = document.getElementById("input-contraseña");

function formulario(event){
    event.preventDefault();
    const nombre = document.getElementById("input-nombre").value;
    const apellido = document.getElementById("input-apellido").value;
    const nombreDeUsuario = document.getElementById("input-nombredeusuario").value;
    const correoElectronico = document.getElementById("input-correoelectronico").value;
    const contrasena = document.getElementById("input-contrasena").value;
    alert(`nombre: ${nombre}
    apellido: ${apellido}
    nombre de usuario: ${nombreDeUsuario}
    correo elctronico: ${correoElectronico}
    contraseñia: ${contrasena}`)
}