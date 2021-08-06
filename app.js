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

        const afterElement = getDragAfterElement(container, e.clientY);
        console.log(afterElement);
        const currentDragging = document.querySelector('.dragging');

        if(!afterElement)
            container.append(currentDragging);
        else    
            container.insertBefore(currentDragging, afterElement);
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, elem) => {
        const box = elem.getBoundingClientRect();
        // console.log(box);
        const newOffset = y - box.top - box.height/2;
        // console.log(offset);
        if(newOffset < 0 && newOffset > closest.offset) {
            return {offset: newOffset, element: elem};
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

