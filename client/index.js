const namee = document.getElementById("name");
const price = document.getElementById("price");
const button = document.querySelector(".btn");

button.addEventListener("click", async () => {
    try {
        const body = { name: namee.value, price: price.value }
        const response = await fetch("http://localhost:5000/crypto", {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body) // this makes tyhe req.body part
        }); // in the client we got to make the respoinse we do the fetch with the local and the repone obkect that takes the stringify
        console.log("cli")
    } catch (error) {
        console.log(error)

    }
})