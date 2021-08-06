const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        // console.log('drag start');
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        // console.log('drag end');
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        // console.log('drag over');
        const currentDragging = document.querySelector('.dragging');
        container.append(currentDragging);
    })
})