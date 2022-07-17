let cards=[]
let addCard = (event) => {
  event.preventDefault()
  let name = document.getElementById('name').value
  let start = document.getElementById('start').value
  let end = document.getElementById('end').value
  let descriptions = document.getElementById('area').value
  let image = document.getElementById('upload-img').files[0]
    console.log(image)
  let imagesProject = URL.createObjectURL(image)

  let technology = document.getElementsByName('checked');

  let card= {name,descriptions,imagesProject}
  cards.push(card);
  cardProjects();

}


let cardProjects = () => {
  let cardProject = document.getElementsByClassName('card-container')
  cardProject.innerHTML = ""
  for (i = 0; i < cards.length; i++) {
      cardProject.innerHTML += `
      <div class="card-container">
      <div>
          <img src="${cards[i].image}" alt="">
      </div>
      <div class="title">
          <h1>${cards[i].name}</h1>
          <h3>duration: 3 month</h3>
      </div>

      <div class="desc">
          <p>${cards[i].descriptions}</p>
      </div>
      <div class="icon">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="container-butt">
          <button>edit</button>
          <button>delete</button>
      </div>
  </div>`
  }
}

let form = document.getElementsByClassName("form")[0].addEventListener('submit', addCard)







