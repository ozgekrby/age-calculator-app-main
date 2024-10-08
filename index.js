document.addEventListener('DOMContentLoaded', () => {
    const inputDay = document.querySelector("#day");
    const inputMonth = document.querySelector("#month");
    const inputYear = document.querySelector("#year");
    const form = document.querySelector("form");
    const years = document.getElementById("years");
    const months = document.getElementById("months");
    const days = document.getElementById("days");

    const validateDay = () => {
        const value = parseInt(inputDay.value, 10);
        if (value < 1 || value > 31) {
            inputDay.classList.add('error');
            inputDay.classList.remove('valid');
        } else {
            inputDay.classList.add('valid');
            inputDay.classList.remove('error');
        }
    };

    const validateMonth = () => {
        const value = parseInt(inputMonth.value, 10);
        if (value < 1 || value > 12) {
            inputMonth.classList.add('error');
            inputMonth.classList.remove('valid');
        } else {
            inputMonth.classList.add('valid');
            inputMonth.classList.remove('error');
        }
    };

    const validateYear = () => {
        const value = parseInt(inputYear.value, 10);
        const currentYear = new Date().getFullYear();
        if (value < 1900 || value > currentYear) {
            inputYear.classList.add('error');
            inputYear.classList.remove('valid');
        } else {
            inputYear.classList.add('valid');
            inputYear.classList.remove('error');
        }
    };

    inputDay.addEventListener("input", validateDay);
    inputMonth.addEventListener("input", validateMonth);
    inputYear.addEventListener("input", validateYear);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (inputDay.classList.contains("error") || inputMonth.classList.contains("error") || inputYear.classList.contains("error")) {
            alert('Please enter valid date values.');
            return;
        }

        const day = parseInt(inputDay.value, 10);
        const month = parseInt(inputMonth.value, 10);
        const year = parseInt(inputYear.value, 10);

        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        if (birthDate > today) {
            alert('Birth date cannot be in the future.');
            return;
        }

        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        let dayDiff = today.getDate() - birthDate.getDate();

        if (dayDiff < 0) {
            monthDiff--;
            const lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0);
            dayDiff += lastMonthDate.getDate();
        }

        if (monthDiff < 0) {
            age--;
            monthDiff += 12;
        }
        years.textContent = `${age}`;
        months.textContent = `${monthDiff}`;
        days.textContent = `${dayDiff}`;
    });
});
