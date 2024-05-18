// Get unique values for the desired columns
function getUniqueValuesFromColumn() {
    var unique_col_values_dict = {};

    const allFilters = document.querySelectorAll(".table-filter");
    allFilters.forEach((filter_i) => {
        const col_index = filter_i.parentElement.getAttribute("col-index");
        const rows = document.querySelectorAll("#emp-table > tbody > tr");

        rows.forEach((row) => {
            const cell_value = row.querySelector(`td:nth-child(${col_index})`).innerHTML;
            if (col_index in unique_col_values_dict) {
                if (!unique_col_values_dict[col_index].includes(cell_value)) {
                    unique_col_values_dict[col_index].push(cell_value);
                }
            } else {
                unique_col_values_dict[col_index] = [cell_value];
            }
        });
    });

    updateSelectOptions(unique_col_values_dict);
}

// Add <option> tags to the desired columns based on the unique values
function updateSelectOptions(unique_col_values_dict) {
    const allFilters = document.querySelectorAll(".table-filter");

    allFilters.forEach((filter_i) => {
        const col_index = filter_i.parentElement.getAttribute('col-index');
        unique_col_values_dict[col_index].forEach((value) => {
            filter_i.innerHTML += `<option value="${value}">${value}</option>`;
        });
    });
}

// Create filter_rows() function
function filter_rows() {
    const allFilters = document.querySelectorAll(".table-filter");
    const filter_value_dict = {};

    allFilters.forEach((filter_i) => {
        const col_index = filter_i.parentElement.getAttribute('col-index');
        const value = filter_i.value;
        if (value !== "all") {
            filter_value_dict[col_index] = value;
        }
    });

    const rows = document.querySelectorAll("#emp-table tbody tr");
    rows.forEach((row) => {
        let display_row = true;
        Object.keys(filter_value_dict).forEach((col_index) => {
            const filter_value = filter_value_dict[col_index];
            const row_cell_value = row.querySelector(`td:nth-child(${col_index})`).innerHTML;
            if (row_cell_value.indexOf(filter_value) === -1 && filter_value !== "all") {
                display_row = false;
            }
        });

        row.style.display = display_row ? "table-row" : "none";
    });
}
