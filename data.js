document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("add");

    buttom.addEventListener("click", (e) => {
        e.preventDefault();


        const input = document.getElementById("name").value;
        const select = document.getElementById("type").value;

       const li = document.createElement("li");
       li.setAttribute("data-type", select.value);
       li.innerText = input.value;

       const ul = document.getElementById("Shopping-list");
             ul.appendChild(li);

             input.value = "";


    });

})
