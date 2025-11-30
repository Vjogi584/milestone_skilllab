function subscribe() {
    const email = document.getElementById("emailInput").value;
    const msg = document.getElementById("msg");

    if (email === "") {
        msg.textContent = "Please enter an email!";
        msg.style.color = "red";
    } else {
        msg.textContent = "Thank you for subscribing!";
        msg.style.color = "green";
    }
}

function addComment() {
    const name = document.getElementById("commentName").value;
    const text = document.getElementById("commentText").value;
    const list = document.getElementById("commentsList");

    if (name === "" || text === "") {
        alert("Please fill both fields!");
        return;
    }

    const newComment = document.createElement("div");
    newComment.className = "comment-item";
    newComment.innerHTML = `<b>${name}</b><br>${text}`;

    list.prepend(newComment);

    document.getElementById("commentName").value = "";
    document.getElementById("commentText").value = "";
}

function toggleDetails(id) {
    var box = document.getElementById(id);
    box.style.display = box.style.display === "block" ? "none" : "block";
}

function submitGuideFeedback() {
    const text = document.getElementById('guide-feedback-text').value;
    const status = document.getElementById('guide-feedback-status');

    if (text === "") {
        status.style.color = "red";
        status.textContent = "Feedback cannot be empty.";
    } else {
        status.style.color = "green";
        status.textContent = "Thank you for your feedback!";
    }
}




