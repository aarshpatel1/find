function searchTable() {
    // Get the search input value
    let input = document.getElementById("searchInput").value.toUpperCase();

    // Get the table and its rows
    let table = document.getElementById("dataTable");
    let tr = table.getElementsByTagName("tr");

    // Loop through all table rows (except the first, which contains the headers)
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        let rowContainsQuery = false;

        // Loop through each cell in the row
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                let cellText = td[j].textContent || td[j].innerText;
                if (cellText.toUpperCase().indexOf(input) > -1) {
                    rowContainsQuery = true;
                    break;
                }
            }
        }

        // Show the row if it contains the search query, otherwise hide it
        tr[i].style.display = rowContainsQuery ? "" : "none";
    }
}
