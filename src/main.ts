import './style.css'
type Email={
  from: string;
  header: string;
  content: string;
  emailAddress: string;
  img: string;
  read: boolean;
}
type State={
  emails:Email[]
}
const state:State= {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ]
}
function renderEmailList(){
  document.textContent=""
  let InboxEl=document.querySelector("main")
  let h1El=document.createElement("h1")
  h1El.textContent="Inbox"
  let ulEl=document.createElement("ul")
  ulEl.classList.add("emails-list")
  for(let email of state.emails){
  let liEl=document.createElement("li")
  liEl.classList.add("emails-list__item")
  let spanEl=document.createElement("span")
  spanEl.className=("emails-list__item__read-icon material-symbols-outlined")
  spanEl.textContent="mark_email_unread"
  let imgEl=document.createElement("img")
  imgEl.src=email.img
  let pEl=document.createElement("p")
pEl.className="emails-list__item__from"
pEl.textContent=email.from
let p2El=document.createElement("p")
p2El.className="emails-list__item__content"
p2El.textContent=email.content
liEl.append(spanEl, imgEl, pEl, p2El)
ulEl.append(liEl)
// InboxEl?.addEventListener(`click` ,function (){
//   readVersion().
//   render()
// })

}
document.body.append(ulEl)
InboxEl?.append( h1El,ulEl)
}

function readVersion(){
  let InboxEl=document.querySelector("main")
  let liEl=document.createElement("li")
liEl.className=("emails-list__item read")
  for(let email of state.emails){
let spanEl=document.createElement("span")
  spanEl.className=("emails-list__item__read-icon material-symbols-outlined")
  spanEl.textContent="mark_email_read"
  let imgEl=document.createElement("img")
  imgEl.src=email.img
  let pEl=document.createElement("p")
pEl.className="emails-list__item__from"
pEl.textContent=email.from
let p2El=document.createElement("p")
p2El.className="emails-list__item__content"
p2El.textContent=email.content
liEl.append(spanEl, imgEl, pEl, p2El)

}
document.body.append(liEl)
InboxEl?.append( liEl)

}

// <!-- email - read version -->
// <li class="emails-list__item read">
//   <span class="emails-list__item__read-icon material-symbols-outlined">
//     mark_email_read
//   </span>
//   <img class="emails-list__item__image" src="assets/nico.JPG" />
//   <p class="emails-list__item__from">Nico</p>
//   <p class="emails-list__item__content">
//     Link to today's video and slides is up!
//   </p>
// </li>

function render(){

  renderEmailList()
}
render()