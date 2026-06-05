window.addEventListener("load", () => {

    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
            console.error("Fout bij eerste connectie:", error);
        });

    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {

            let html = "<ul>";

            for(let i = 0; i < data.length; i++) {

                html += `
                    <li>
                        ${data[i].name} - ${data[i].level}
                    </li>
                `;

            }

            html += "</ul>";

            document.getElementById("message").innerHTML = html;

        })
        .catch(error => {

            console.error("Fout bij ophalen van skills:", error);

            document.getElementById("message").innerText =
                "Fout bij laden van gegevens";

        });

});