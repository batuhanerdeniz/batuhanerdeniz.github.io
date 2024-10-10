document.addEventListener("DOMContentLoaded", () => {
  const mainCategorySelect = document.getElementById("mainCategory");
  const itemTableBody = document.getElementById("itemTable").querySelector("tbody");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const detailTableBody = document.getElementById("detailTable").querySelector("tbody");
  const modalTitle = document.querySelector(".modal-content h2");
  const tableHeaders = document.querySelectorAll("#itemTable th");

  const loginButton = document.getElementById("login-button");
  const loginContainer = document.getElementById("login-container");
  const mainContent = document.getElementById("main-content");
  const errorMessage = document.getElementById("error-message");

  const correctUsername = "rasim";
  const correctPassword = "123456";

  loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
      loginContainer.style.display = "none";
      mainContent.style.display = "block";
    } else {
      errorMessage.style.display = "block";
    }
  });

  let currentItems = [];

  mainCategorySelect.addEventListener("change", () => {
    const selectedMainCategory = mainCategorySelect.value;
    itemTableBody.innerHTML = ""; // Clear previous entries

    if (data[selectedMainCategory]) {
      // Collect items from the selected category
      currentItems = data[selectedMainCategory];
    }

    renderTable(currentItems);
  });

  tableHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
      sortTable(index);
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function renderTable(items) {
    itemTableBody.innerHTML = ""; // Clear previous entries
    items.forEach((item) => {
      let row = document.createElement("tr");
      row.innerHTML = `
                <td>${item.isim}</td>
                <td>${mainCategorySelect.value === "personel" ? item.gorev : item.tip}</td>
                <td class="${getStatusClass(item.sertifikalar)}"></td>
            `;
      row.addEventListener("click", () => {
        showModal(item.isim, item.sertifikalar);
      });
      itemTableBody.appendChild(row);
    });
  }

  function sortTable(columnIndex) {
    const rows = Array.from(itemTableBody.querySelectorAll("tr"));
    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();
      return aText.localeCompare(bText);
    });
    itemTableBody.innerHTML = "";
    sortedRows.forEach(row => itemTableBody.appendChild(row));
  }

  function showModal(name, certificates) {
    modalTitle.textContent = `${name}`;
    detailTableBody.innerHTML = ""; // Clear previous entries
    certificates.forEach((cert) => {
      let row = document.createElement("tr");
      const linkStyle = (cert.link && cert.link !== "#" && cert.link !== "") ? "font-weight: bold;" : "";
      row.innerHTML = `
            <td>${cert.sertifika}</td>
            <td class="${getStatusClass([cert])}"><a href="${cert.link}" target="_blank" style="${linkStyle}">${cert.tarih}</a></td>
            <td><button>✎</button><button>✖</button></td>
        `;
      detailTableBody.appendChild(row);
    });
    modal.style.display = "block";
  }

  function getStatusClass(certificates) {
    const now = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(now.getMonth() + 1);

    let hasRed = false;
    let hasYellow = false;

    for (let cert of certificates) {
      const [day, month, year] = cert.tarih.split("-").map(Number);
      const certDate = new Date(`20${year}`, month - 1, day); // Adjust year to 4 digits
      if (certDate < now) {
        hasRed = true;
      } else if (certDate < oneMonthLater) {
        hasYellow = true;
      }
    }

    if (hasRed) return "red";
    if (hasYellow) return "yellow";
    return "green";
  }
});