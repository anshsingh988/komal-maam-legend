document.addEventListener("DOMContentLoaded", () => {
    const voteBtn = document.getElementById("vote-btn");
    const voteCountEl = document.getElementById("vote-count");
    const voteMessage = document.getElementById("vote-message");

    // Check if user has already voted
    if (localStorage.getItem("hasVoted") === "true") {
        voteBtn.disabled = true;
        voteBtn.innerText = "Already Voted";
        voteBtn.style.opacity = "0.5";
        voteBtn.style.cursor = "not-allowed";
    }

    voteBtn.addEventListener("click", () => {
        // Update UI
        let currentVotes = parseInt(voteCountEl.innerText);
        voteCountEl.innerText = currentVotes + 1;

        // Lock voting for this user
        localStorage.setItem("hasVoted", "true");
        voteBtn.disabled = true;
        voteBtn.innerText = "Voted Successfully";
        voteBtn.style.opacity = "0.5";
        
        // Show success message
        voteMessage.classList.remove("hidden");
    });
});
