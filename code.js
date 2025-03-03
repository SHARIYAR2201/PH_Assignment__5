function getCurrentTime() {
    const today = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return today.toLocaleTimeString('en-US', options);
}

document.getElementById("button-1").addEventListener('click', function(event) {
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("button-1").disabled = true;

    const navNum = parseInt(document.getElementById("nav-num").innerText);
    const taskNum = parseInt(document.getElementById("task-num").innerText);

    console.log(navNum, taskNum);

    if (taskNum === 1) {
        alert("Congrats!! You have completed all the current tasks");
    }

    document.getElementById("nav-num").innerText = navNum + 1;
    document.getElementById("task-num").innerText = taskNum - 1;

    const card1 = document.getElementById("ShopEase").innerText;
    const log = document.getElementById("activity");
    const p = document.createElement("p");
    const time = getCurrentTime();
    
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    
    log.appendChild(p);
});

document.getElementById("button-2").addEventListener('click', function(event) {
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("button-2").disabled = true;

    const navNum = parseInt(document.getElementById("nav-num").innerText);
    const taskNum = parseInt(document.getElementById("task-num").innerText);

    console.log(navNum, taskNum);

    if (taskNum === 1) {
        alert("Congrats!! You have completed all the current tasks");
    }

    document.getElementById("nav-num").innerText = navNum + 1;
    document.getElementById("task-num").innerText = taskNum - 1;

    const card2 = document.getElementById("CloudSync").innerText;
    const log = document.getElementById("activity");
    const p = document.createElement("p");
    const time = getCurrentTime();
    
    p.innerText = `You have completed the task ${card2} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    
    log.appendChild(p);
});


document.getElementById("button-3").addEventListener('click', function(event) {
    event.preventDefault();
    alert("Board uploadedd successfully");
    document.getElementById("button-3").disabled = true;

    const navNum = parseInt(document.getElementById("nav-num").innerText);
    const taskNum = parseInt(document.getElementById("task-num").innerText);

    console.log(navNum, taskNum);

    if (taskNum === 1) {
        alert("Congrats!!! You have completed all your current tasks");
    }

    document.getElementById("nav-num").innerText = navNum + 1;
    document.getElementById("task-num").innerText = taskNum - 1;

    const card3 = document.getElementById("SwiftPay").innerText;
    const log = document.getElementById("activity");
    const p = document.createElement("p");
    const time = getCurrentTime();
    
    p.innerText = `You have completed the task ${card3} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    
    log.appendChild(p);
});

document.getElementById("button-4").addEventListener('click', function(event) {
    event.preventDefault();
    alert("Board uploadedd successfully");
    document.getElementById("button-3").disabled = true;

    const navNum = parseInt(document.getElementById("nav-num").innerText);
    const taskNum = parseInt(document.getElementById("task-num").innerText);

    console.log(navNum, taskNum);

    if (taskNum === 1) {
        alert("Congrats!!! You have completed all your current tasks");
    }

    document.getElementById("nav-num").innerText = navNum + 1;
    document.getElementById("task-num").innerText = taskNum - 1;

    const card4 = document.getElementById("Meta").innerText;
    const log = document.getElementById("activity");
    const p = document.createElement("p");
    const time = getCurrentTime();
    
    p.innerText = `You have completed the task ${card4} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    
    log.appendChild(p);
});


document.getElementById("button-5").addEventListener('click', function(event) {
    event.preventDefault();
    alert("Board uploadedd successfully");
    document.getElementById("button-5").disabled = true;

    const navNum = parseInt(document.getElementById("nav-num").innerText);
    const taskNum = parseInt(document.getElementById("task-num").innerText);

    console.log(navNum, taskNum);

    if (taskNum === 1) {
        alert("Congrats!!! You have completed all your current tasks");
    }

    document.getElementById("nav-num").innerText = navNum + 1;
    document.getElementById("task-num").innerText = taskNum - 1;

    const card5 = document.getElementById("Google").innerText;
    const log = document.getElementById("activity");
    const p = document.createElement("p");
    const time = getCurrentTime();
    
    p.innerText = `You have completed the task ${card5} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    
    log.appendChild(p);
});


document.getElementById("button-6").addEventListener('click', function(event) {
    event.preventDefault();
    alert("Board uploadedd successfully");
    document.getElementById("button-6").disabled = true;

    const navNum = parseInt(document.getElementById("nav-num").innerText);
    const taskNum = parseInt(document.getElementById("task-num").innerText);

    console.log(navNum, taskNum);

    if (taskNum === 1) {
        alert("Congrats!!! You have completed all your current tasks");
    }

    document.getElementById("nav-num").innerText = navNum + 1;
    document.getElementById("task-num").innerText = taskNum - 1;

    const card6 = document.getElementById("Glassdoor").innerText;
    const log = document.getElementById("activity");
    const p = document.createElement("p");
    const time = getCurrentTime();
    
    p.innerText = `You have completed the task ${card6} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    
    log.appendChild(p);
});



document.getElementById("clearactivity-btn").addEventListener('click', () => {
    document.getElementById("activity").innerText = '';
});

document.getElementById("discover-button").addEventListener('click', () => {
    window.location.href = "D:\SELF\assignment-5\blog.html";
});
