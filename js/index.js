const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const paransUrl = new URLSearchParams(window.location.search);
const paransId = paransUrl.get('id');
const displayEvents = async () => {
    const eventList = document.querySelector("#events");
    const options = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${BASE_URL}/events`, options);
    const content = await response.json();
    //console.log(content);
    const events = content.splice(0, 3);
        events.forEach(item=> {
            eventList.innerHTML += `
        <article id="cardModal" class="evento card p-5 m-3">
        <h2>${item.name}${item.scheduled}</h2>
        <h4>${item.attractions}</h4>
        <p>${item.description}.</p>
        <a href="<a href="${BASE_URL}/bookings/${item._id}" class="btn btn-primary" id="modalBtn">reservar ingresso</a></a>
        </article>`
        });
    var modal = document.querySelector("#exibitionModal");
    var modalBtn = document.querySelector("#modalBtn");
    var closeBtn = document.querySelector("close");
    modalBtn.forEach((button) => {
        button.onclick = function (events) {
            modal.style.display = "block";
            events.preventDefault();
        }
    }
    );
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (events) {
        if (events.target == modal) {
            modal.style.display = "none";
        }
    }
}
displayEvents();
