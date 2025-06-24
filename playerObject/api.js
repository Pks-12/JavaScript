// fetch('player.json')
// .then(response =>response.json())
// .then(data =>{
//     const container = document.getElementById("players");
//     data.forEach(player =>{
//         const card = document.createElement("div");
//         const img = document.createElement("img");
//         const heading = document.getElementById("heading");
//         heading.textContent = `${data.length} Top Bowlers`;
//         img.src = player.playerImages.images;
//         img.alt = player.fullName;
//         img.width = 200;
//         const name = document.createElement("h3");
//         name.textContent = player.fullName;
//         name.style.color = "white"
//         const role  = document.createElement("p");
//         role.textContent = `Role: ${player.personalInformation.roleType}`;
//         role.style.color = "white"

        
//         const nationalTeam = document.createElement("h2");
//         nationalTeam.textContent = player.careerInformation.nationalTeam;
//         nationalTeam.style.color = "white"

//         card.appendChild(img);
//         card.appendChild(name);
//         card.appendChild(role);
//         card.appendChild(nationalTeam);
//         container.appendChild(card);
//     });
// })
// .catch(error=>{
//     console.error("Error loading JSON:",error);
// })

document.getElementById("search").addEventListener("click", function () {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  fetch("player.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("players");
      container.innerHTML = ""; // Clear previous results

      // Only display if user types "top bowlers"
      if (searchValue.includes("top bowlers")) {
        document.getElementById("heading").textContent = `${data.length} Top Bowlers`;

        data.forEach(player => {
          const card = document.createElement("div");

          const img = document.createElement("img");
          img.src = player.playerImages.images;
          img.alt = player.fullName;
          img.width = 200;

          const name = document.createElement("h3");
          name.textContent = player.fullName;
          name.style.color = "white";

          const role = document.createElement("p");
          role.textContent = `Role: ${player.personalInformation.roleType}`;
          role.style.color = "white";

          const team = document.createElement("h2");
          team.textContent = player.careerInformation.nationalTeam;
          team.style.color = "white";

          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(role);
          card.appendChild(team);

          container.appendChild(card);
        });
      } else {
        document.getElementById("heading").textContent = "No Results Found";
      }
    })
    .catch(error => console.error("Error loading JSON:", error));
});


// document.getElementById("search").addEventListener("click", function () {
//   const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();

//   fetch("player.json")
//     .then(response => response.json())
//     .then(data => {
//       const container = document.getElementById("players");
//       container.innerHTML = ""; // Clear previous results

//       // Only allow exact word 'bowler' or 'bowlers'
//       if (searchValue === "bowler" || searchValue === "bowlers") {
//         document.getElementById("heading").textContent = `${data.length} Top Bowlers`;
  
//         data.forEach(player => {
//           const card = document.createElement("div");

//           const img = document.createElement("img");
//           img.src = player.playerImages.images;
//           img.alt = player.fullName;
//           img.width = 200;

//           const name = document.createElement("h3");
//           name.textContent = player.fullName;
//           name.style.color = "white";

//           const role = document.createElement("p");
//           role.textContent = `Role: ${player.personalInformation.roleType}`;
//           role.style.color = "white";

//           const team = document.createElement("h2");
//           team.textContent = player.careerInformation.nationalTeam;
//           team.style.color = "white";

//           card.appendChild(img);
//           card.appendChild(name);
//           card.appendChild(role);
//           card.appendChild(team);

//           container.appendChild(card);
//         });
//       } else {
//         document.getElementById("heading").textContent = "No Results Found";
//       }
      
//     })
//     .catch(error => console.error("Error loading JSON:", error));
// });

// if users search the bowler or bowler it only show the result other wise it return nothing.... hahah