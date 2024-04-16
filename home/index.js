const formCreate =document.querySelector('#form-create');
const createInput =document.querySelector('#create-input');
const formLogin =document.querySelector('#form-login');
const loginInput =document.querySelector('#login-input');
const notification =document.querySelector('.notification');


formLogin.addEventListener('submit', async e => {
    e.preventDefault();  // Para que la pagina no cargue cuando hagamos el evento de submit
    const response = await fetch('http://localhost:3000/users', { method: 'GET'});
    const users = await response.json();
    const user = users.find(user => user.username === loginInput.value);

    if (!user) {
        notification.innerHTML = 'El usuario no existe';
        notification.classList.add('show-notification');
        setTimeout(() => {
            notification.classList.remove('show-notification');
        }, 3000);
    } else {
        // localStorage.setItem('user', user); Si lo ponemos asi lo va a guardar como texto y no nos sirve, lo necesitamos como objeto
        localStorage.setItem('user', JSON.stringify(user)); // Primero necesitamos pasarlo a JSON y despues de JSON a Js
        window.location.href = '../contactos/contactos.html' // Aca primero estamos saliendo del directorio, despues seleccionamos la carpeta todos y despues seleccionamos el html todos
    }
})

formCreate.addEventListener('submit', async e => {
    e.preventDefault(); // Para que la pagina no cargue cuando hagamos el evento de submit
    const response = await fetch('http://localhost:3000/users', { method: 'GET'});
    const users = await response.json();
    const user = users.find(user => user.username === createInput.value);

    if (createInput.value === '') {
        notification.innerHTML = 'No puede crear un usuario vacio';
        notification.classList.add('show-notification');
        setTimeout(() => {
            notification.classList.remove('show-notification');
        }, 3000);
    }else if (user){
        notification.innerHTML = 'El usuario ya existe';
        notification.classList.add('show-notification');
        setTimeout(() => {
            notification.classList.remove('show-notification');
        }, 3000);
    }else {
        await fetch('http://localhost:3000/users', { 
            method: 'POST',
            headers: { // Esto es para especificar que tipo de dato voy a mandar
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({username: createInput.value}), // Es donde enviamos el contenido
            // stringify es para volver codigo java script a JSON y parse es para volver codigo JSON a codigo java script 
        });
        notification.innerHTML = `Usuario ${createInput.value} ha sido creado`;
        notification.classList.add('show-notification');
        setTimeout(() => {
            notification.classList.remove('show-notification');
        }, 3000);

        createInput.value=''; //Esto es para borrar lo que haya en el input 
    }
})