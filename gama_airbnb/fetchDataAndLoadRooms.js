const api_url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
var rooms = [];

async function fetchRooms(){
    let response = await fetch(api_url);
    let data = await response.json();
    return data;
}

function createRoomDiv(room) {
    const room_div = document.createElement('div');
    room_div.className = 'col-lg-3';
    room_div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class='card_image card_image_padded'>
                <img src='${room.photo}' class="card-img-top">
            </div>
            <div class="card-body">
                <h6 class="card-title font-weight-bold">${room.property_type}</h6>
                <p class="card-text">${room.name}</p>
                <div class='card_avaliacao align-bottom'>
                    <span class='card_star_rating'>
                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: 12px; width: 12px; fill: rgb(72, 159, 181)"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></svg>
                        ${(Math.random() + 4).toFixed(2)}
                    </span>
                    <span class='card_room_price'><span class='font-weight-bold'>R$ ${room.price}</span> / noite</span>
                </div>
            </div>
        </div>
    `
    return room_div;
}

function renderRooms(roomsToRender) {
    let roomsList = document.getElementById('rooms_grid');
    roomsList.innerHTML = '';
    roomsToRender.forEach(room => roomsList.appendChild(createRoomDiv(room)))
}

function renderTotalRoomsCount(total_rooms_count) {
    let roomsLengthLabel = document.getElementsByClassName('rooms_length')[0];
    roomsLengthLabel.textContent = `Exibindo ${total_rooms_count} resultados`
}

async function resultPageSetup() {
    rooms = await fetchRooms();
    renderTotalRoomsCount(rooms.length);
    renderRooms(getItemsToRender());
}

resultPageSetup();