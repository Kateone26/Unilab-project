let headerjs = document.getElementById('header');
let togglebutton = document.getElementById('toggleburger');
let slidenavbar = document.getElementById('slide-navbar');
let footeroverlay = document.getElementById('footer-overlay')

togglebutton.addEventListener('click', function(){
    headerjs.classList.add('disappear');
    slidenavbar.classList.add('appear');
    footeroverlay.classList.add('appear');
    

    document.addEventListener('mouseup', function(e) {
        var container = document.getElementById('overlay');
        if (!container.contains(e.target)) {
            headerjs.classList.remove('disappear');
            slidenavbar.classList.remove('appear');
            footeroverlay.classList.remove('appear');
        }
    });


})




// api info: // get data
function fetchdata(){
    fetch('https://reqres.in/api/users?results=3')
        .then(response=>{
            if(!response.ok){
                throw Error('error')
            }
            return response.json();
        })
        .then(data=>{
            const html = data.data.map(user=>{
                return `
                <div class="user">
                    <p><img class="api-img" src=" ${user.avatar}" alt="user.first_name"></p>
                    <p class="api-name"> ${user.first_name}</p>
                    <a class="js-email" href="mailto:mail@gmail.com"> ${user.email}</a>
                </div>
                
                `
            })
            .join('');
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html );
        })
        .catch(error =>{
            console.log(error);
        });
}
fetchdata();
// api info