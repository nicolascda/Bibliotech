document.getElementById("formLivro").addEventListener("submit", async function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    const response = await fetch("cadastrarLivro.php", {
        method: "POST",
        body: formData
    });

    const texto = await response.text();
    document.getElementById("msg").innerHTML = texto;
});
