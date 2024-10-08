document.addEventListener('DOMContentLoaded', () => {
    const departmentSelect = document.getElementById('department');
    const employeeTableBody = document.getElementById('employeeTable').querySelector('tbody');

    console.log('departments:', departments);

    // Populate department dropdown
    for (let dept in departments) {
        let option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        departmentSelect.appendChild(option);
    }

    // Event listener for department selection
    departmentSelect.addEventListener('change', () => {
        const selectedDept = departmentSelect.value;
        employeeTableBody.innerHTML = ''; // Clear previous entries

        if (selectedDept) {
            const employees = departments[selectedDept];
            employees.forEach(employee => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.ad}</td>
                    <td>${employee.soyad}</td>
                    <td>${employee.telefon}</td>
                    <td>${employee.adres}</td>
                    <td class="${getDocumentStatusClass(employee.isGuvenligi)}">${employee.isGuvenligi}</td>
                    <td class="${getDocumentStatusClass(employee.iseGiris)}">${employee.iseGiris}</td>
                    <td class="${getDocumentStatusClass(employee.sigorta)}">${employee.sigorta}</td>
                    <td class="${getDocumentStatusClass(employee.saglik)}">${employee.saglik}</td>
                    <td>
                        <button class="edit-btn">✎</button>
                        <button class="delete-btn">✖</button>
                    </td>
                `;
                employeeTableBody.appendChild(row);
            });
        }
    });

    function getDocumentStatusClass(status) {
        switch (status) {
            case 'tam': return 'green';
            case 'eksik': return 'yellow';
            case 'yok': return 'red';
            default: return '';
        }
    }
});