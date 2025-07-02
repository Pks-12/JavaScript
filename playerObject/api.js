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

// document.getElementById("search").addEventListener("click", function () {
//   const searchValue = document.getElementById("searchInput").value.toLowerCase();

//   fetch("player.json")
//     .then(response => response.json())
//     .then(data => {
//       const container = document.getElementById("players");
//       container.innerHTML = ""; // Clear previous results

//       // Only display if user types "top bowlers"
//       if (searchValue.includes("top bowlers")) {
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

// if users search the bowler or bowlers it only show the result other wise it return nothing.... hahah


// document.getElementById("search").addEventListener("click", function () {
//   // Get search value and normalize it
//   const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();

//   // Fetch player data from JSON file
//   fetch("player.json")
//     .then(response => response.json())
//     .then(data => {
//       const container = document.getElementById("players");
//       container.innerHTML = ""; // Clear previous results

//       // Filter bowlers from dataset
//       const bowlers = data.filter(player => {
//         const role = player.personalInformation.roleType.toLowerCase();
//         return role.includes("bowler"); // Filter players whose role is bowler
//       });

//       // Check search type
//       if (searchValue === "top bowler" || searchValue === "top bowlers") {
//         // Show top 3 bowlers only
//         const top3 = bowlers.slice(0, 3);
//         document.getElementById("heading").textContent = "Top 3 Bowlers";
//         displayPlayers(top3, container);
//       } else if (searchValue === "bowler" || searchValue === "bowlers") {
//         // Show all bowlers
//         document.getElementById("heading").textContent = `${bowlers.length} Bowlers Found`;
//         displayPlayers(bowlers, container);
//       } else {
//         // No valid search
//         document.getElementById("heading").textContent = "No Results Found";
//       }
//     })
//     .catch(error => console.error("Error loading JSON:", error));
// });

// // Helper function to create and display player cards
// function displayPlayers(players, container) {
//   players.forEach(player => {
//     const card = document.createElement("div");

//     const img = document.createElement("img");
//     img.src = player.playerImages.images;
//     img.alt = player.fullName;
//     img.width = 200;

//     const name = document.createElement("h3");
//     name.textContent = player.fullName;
//     name.style.color = "white";

//     const role = document.createElement("p");
//     role.textContent = `Role: ${player.personalInformation.roleType}`;
//     role.style.color = "white";

//     const team = document.createElement("h2");
//     team.textContent = player.careerInformation.nationalTeam;
//     team.style.color = "white";

//     card.appendChild(img);
//     card.appendChild(name);
//     card.appendChild(role);
//     card.appendChild(team);

//     container.appendChild(card);
//   });
// }

// document.getElementById("search").addEventListener("click", function () {
//   const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();

//   fetch("player.json")
//     .then(response => response.json())
//     .then(data => {
//       // Calculate rating for each player based on ODI bowling stats
//       data.forEach(player => {
//         const bowling = player.bowlingCareerSummary?.odi;
//         if (bowling) {
//           const wickets = parseFloat(bowling.wicket) || 0;
//           const economy = parseFloat(bowling.Econ) || 0;
//           const average = parseFloat(bowling.average) || 0;
//           player.rating = (wickets * 2) - (economy * 5) - (average * 1);
//         } else {
//           player.rating = 0;
//         }
//       });

//       const container = document.getElementById("players");
//       container.innerHTML = ""; // Clear previous results

//       // Search handling
//       if (searchValue === "top bowlers") {
//         // Sort players by rating descending
//         const topBowlers = data
//           .filter(p => p.personalInformation.roleType.toLowerCase().includes("bowler"))
//           .sort((a, b) => b.rating - a.rating)
//           .slice(0, 3); // take top 3

//         document.getElementById("heading").textContent = `Top 3 Bowlers`;

//         topBowlers.forEach(player => {
//           const card = createPlayerCard(player);
//           container.appendChild(card);
//         });

//       } else if (searchValue === "bowler" || searchValue === "bowlers") {
//         // Show all bowlers
//         const bowlers = data.filter(p => p.personalInformation.roleType.toLowerCase().includes("bowler"));

//         document.getElementById("heading").textContent = `${bowlers.length} Top Bowlers`;

//         bowlers.forEach(player => {
//           const card = createPlayerCard(player);
//           container.appendChild(card);
//         });

//       } else {
//         document.getElementById("heading").textContent = "No Results Found";
//       }
//     })
//     .catch(error => console.error("Error loading JSON:", error));
// });

// // Helper function to create a player card element
// function createPlayerCard(player) {
//   const card = document.createElement("div");

//   const img = document.createElement("img");
//   img.src = player.playerImages.images;
//   img.alt = player.fullName;
//   img.width = 200;

//   const name = document.createElement("h3");
//   name.textContent = player.fullName;
//   name.style.color = "white";

//   const role = document.createElement("p");
//   role.textContent = `Role: ${player.personalInformation.roleType}`;
//   role.style.color = "white";

//   const team = document.createElement("h2");
//   team.textContent = player.careerInformation.nationalTeam.join(", ");
//   team.style.color = "white";

//   const rating = document.createElement("p");
//   rating.textContent = `Rating: ${player.rating.toFixed(2)}`;
//   rating.style.color = "white";

//   card.appendChild(img);
//   card.appendChild(name);
//   card.appendChild(role);
//   card.appendChild(team);
//   card.appendChild(rating);

//   return card;
// }


document.getElementById("search").addEventListener("click", function () {
  const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();

  const loader = document.getElementById("loader");
  loader.style.display = "block"; // Show loading spinner

  fetch("player.json")
    .then(response => response.json())
    .then(data => {
      // Delay processing by 2 seconds to simulate loading
      setTimeout(() => {
        // Calculate rating for each player based on ODI bowling stats
        data.forEach(player => {
          const bowling = player.bowlingCareerSummary?.odi;
          if (bowling) {
            const wickets = parseFloat(bowling.wicket) || 0;
            const economy = parseFloat(bowling.Econ) || 0;
            const average = parseFloat(bowling.average) || 0;
            player.rating = (wickets * 2) - (economy * 5) - (average * 1);
       // Ensure non-negative rating
          } else {
            player.rating = 0;
          }
        });

        const container = document.getElementById("players");
        container.innerHTML = ""; // Clear previous results

        // Handle search logic
        if (searchValue === "top bowlers") {
          const topBowlers = data
            .filter(p => p.personalInformation.roleType.toLowerCase().includes("bowler"))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);

          document.getElementById("heading").textContent = `Top 3 Bowlers`;

          topBowlers.forEach(player => {
            const card = createPlayerCard(player);
            container.appendChild(card);
          });

        } else if (searchValue === "bowler" || searchValue === "bowlers") {
          const bowlers = data.filter(p => p.personalInformation.roleType.toLowerCase().includes("bowler"));

          document.getElementById("heading").textContent = `${bowlers.length} Top Bowlers`;

          bowlers.forEach(player => {
            const card = createPlayerCard(player);
            container.appendChild(card);
          });

        } else {
          document.getElementById("heading").textContent = "No Results Found";
        }

        loader.style.display = "none"; // Hide loading spinner after delay
      }, 1500); // 2-second delay
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
      loader.style.display = "none"; // Hide spinner on error
    });
});

// Helper function to create a player card element
function createPlayerCard(player) {
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
  team.textContent = player.careerInformation.nationalTeam.join(", ");
  team.style.color = "white";

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${player.rating.toFixed(2)}`;
  rating.style.color = "white";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(role);
  card.appendChild(team);
  card.appendChild(rating);

  return card;
}
