fetch('player.json')
.then(response =>response.json())
.then(data =>{
    const container = document.getElementById("players");
    data.forEach(player =>{
        const card = document.createElement("div");
        const img = document.createElement("img");
         const heading = document.getElementById("heading");
        heading.textContent = `${data.length} Top Bowlers`;
        img.src = player.playerImages.images;
        img.alt = player.fullName;
        img.width = 200;
        const name = document.createElement("h3");
        name.textContent = player.fullName;
        name.style.color = "white"
        const role  = document.createElement("p");
        role.textContent = `Role: ${player.personalInformation.roleType}`;
        role.style.color = "white"
        const nationalTeam = document.createElement("h2");
        nationalTeam.textContent = player.careerInformation.nationalTeam;
        nationalTeam.style.color = "white"
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(nationalTeam);
        container.appendChild(card);
    });
})
.catch(error=>{
    console.error("Error loading JSON:",error);
})