
const agregarTarea = event => {
    event.preventDefault();
    const { value } = event.target.ingresarTarea;
    if(!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea', 'bordeRondo');
    tarea.addEventListener('click', cambiarEstado)
    tarea.textContent = value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
};

const cambiarEstado = event => {
    event.target.classList.toggle('done');
};

const ordenar = () => {
    const done = [];
    const toDo = [];
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const btnReordenarTareas = () => {
    ordenar().forEach(el => contenedorTareas.appendChild(el))
}