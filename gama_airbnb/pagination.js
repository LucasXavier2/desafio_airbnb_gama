var current_page = 1;
const page_limit = 8;

function getItemsToRender() {
    let from = page_limit * current_page - page_limit;
    let to = Math.min(from + page_limit, rooms.length);
    return rooms.slice(from, to);
}

function updateCurrentPage(new_page) {
    if (new_page <= 0) return false;
    let max_number_of_pages = Math.ceil(rooms.length / page_limit);
    if (new_page > max_number_of_pages) return false;

    current_page = new_page;
    return true;
}

function getPaginationElements() {
    let paginationList = document.getElementById('result-pagination');
    return Array.from(paginationList.children);
}

function clearPaginationActive(elementIndex) {
    getPaginationElements().forEach(element => element.classList.remove('active'));
}

function setPaginationActiveElement(page) {
    getPaginationElements()[page].classList.add('active');
}

function goToPage(page) {
    if(!updateCurrentPage(page)) return;
    clearPaginationActive();
    setPaginationActiveElement(page)
    
    let itemsToRender = getItemsToRender();
    renderRooms(itemsToRender);
}

function goToNextPage() {
    goToPage(current_page + 1);
}

function goToPreviousPage() {
    goToPage(current_page - 1);
}