document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("add");

    buttom.addEventListener("click", (e) => {
        e.preventDefault();

        const input = document.getElementById("name");
        const select = document.getElementById("type");

        console.log(input.value);
        console.log(select.value)
    });
})
