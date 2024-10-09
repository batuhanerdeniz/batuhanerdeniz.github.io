document.addEventListener('DOMContentLoaded', () => {
    const mainCategorySelect = document.getElementById('mainCategory');
    const subCategoryContainer = document.getElementById('subCategoryContainer');
    const subCategorySelect = document.getElementById('subCategory');
    const itemTableBody = document.getElementById('itemTable').querySelector('tbody');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const detailTableBody = document.getElementById('detailTable').querySelector('tbody');
    const modalTitle = document.querySelector('.modal-content h2');

    mainCategorySelect.addEventListener('change', () => {
        const selectedMainCategory = mainCategorySelect.value;
        subCategoryContainer.style.display = selectedMainCategory ? 'block' : 'none';
        subCategorySelect.innerHTML = '<option value="">--Alt Kategori Seçiniz--</option>';

        if (selectedMainCategory) {
            const subCategories = Object.keys(data[selectedMainCategory]);
            subCategories.forEach(subCategory => {
                let option = document.createElement('option');
                option.value = subCategory;
                option.textContent = subCategory;
                subCategorySelect.appendChild(option);
            });
        }
    });

    subCategorySelect.addEventListener('change', () => {
        const selectedMainCategory = mainCategorySelect.value;
        const selectedSubCategory = subCategorySelect.value;
        itemTableBody.innerHTML = ''; // Clear previous entries

        if (selectedSubCategory) {
            const items = data[selectedMainCategory][selectedSubCategory];
            items.forEach(item => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.isim}</td>
                    <td class="${getStatusClass(item.sertifikalar)}"></td>
                `;
                row.addEventListener('click', () => {
                    showModal(item.isim, item.sertifikalar);
                });
                itemTableBody.appendChild(row);
            });
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function showModal(name, certificates) {
        modalTitle.textContent = `${name}`;
        detailTableBody.innerHTML = ''; // Clear previous entries
        certificates.forEach(cert => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${cert.sertifika}</td>
                <td>${cert.tarih}</td>
                <td><a href="${cert.link}" target="_blank">Link</a></td>
            `;
            detailTableBody.appendChild(row);
        });
        modal.style.display = 'block';
    }

    function getStatusClass(certificates) {
        if (certificates.length === 0) return 'red';

        const now = new Date();
        const oneMonthLater = new Date();
        oneMonthLater.setMonth(now.getMonth() + 1);

        for (let cert of certificates) {
            const [day, month, year] = cert.tarih.split('-').map(Number);
            const certDate = new Date(`20${year}`, month - 1, day); // Adjust year to 4 digits
            if (certDate < now) return 'red';
            if (certDate < oneMonthLater) return 'yellow';
        }
        return 'green';
    }
});