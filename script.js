const teamMembers = [
    {
        nameSurname: "Wayne Barnett",
        role: "Founder & CEO",
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nameSurname: "Angela Caroll",
        role: "Chief Editor",
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        nameSurname: "Walter Gordon",
        role: "Office Manager",
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        nameSurname: "Angela Lopez",
        role: "Social Media Manager",
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nameSurname: "Scott Estrada",
        role: "Developer",
        photo: 'scott-estrada-developer.jpg',
    },
    {
        nameSurname: "Barbara Ramos",
        role: "Graphic Designer",
        photo: 'barbara-ramos-graphic-designer.jpg',
    }
]

console.log(teamMembers);

const rowContainer = document.querySelector(".row")


for (let i = 0; i < teamMembers.length; i++) {
    const col4Container = document.createElement("div")
    col4Container.classList.add("col-4", "my-2")
    const arrayCardsImg = document.createElement("div");
    arrayCardsImg.classList.add("card")
    const arrayCardsText = document.createElement("div")
    arrayCardsText.classList.add("card-body")
    col4Container.append(arrayCardsImg)
    arrayCardsImg.innerHTML = `<img src=img/${teamMembers[i].photo}>`;
    arrayCardsImg.append(arrayCardsText);
    arrayCardsText.innerHTML = `<h5> ${teamMembers[i].nameSurname} </h5>`
    arrayCardsText.innerHTML += `<p> ${teamMembers[i].role} </p>`
    rowContainer.append(col4Container)
}

