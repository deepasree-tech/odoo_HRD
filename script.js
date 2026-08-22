/* =====================================================
   DAYFLOW HRMS - COMPLETE JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LOGIN
       ===================================================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const role = document.getElementById("role").value;
            const message = document.getElementById("loginMessage");

            if (email === "" || password === "" || role === "") {

                message.textContent = "Please fill all fields.";
                message.style.color = "#dc2626";

                return;
            }

            /* Save login details */

            localStorage.setItem("dayflowEmail", email);
            localStorage.setItem("dayflowRole", role);
            localStorage.setItem("dayflowLoggedIn", "true");

            message.textContent = "Login successful!";
            message.style.color = "#16a34a";

            /* Go to correct dashboard */

            setTimeout(function () {

                if (role === "admin") {

                    window.location.href = "admin.html";

                } else {

                    window.location.href = "emp.dashboard.html";

                }

            }, 500);

        });
    }


    /* =====================================================
       SIGN UP
       ===================================================== */

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const employeeId =
                document.getElementById("employeeId").value.trim();

            const email =
                document.getElementById("signupEmail").value.trim();

            const password =
                document.getElementById("signupPassword").value.trim();

            const role =
                document.getElementById("signupRole").value;

            const verification =
                document.getElementById("emailVerification").checked;

            const message =
                document.getElementById("signupMessage");


            if (
                employeeId === "" ||
                email === "" ||
                password === "" ||
                role === ""
            ) {

                message.textContent =
                    "Please fill all fields.";

                message.style.color = "#dc2626";

                return;
            }


            if (!verification) {

                message.textContent =
                    "Please confirm your email address.";

                message.style.color = "#dc2626";

                return;
            }


            /* Save account */

            localStorage.setItem("employeeId", employeeId);
            localStorage.setItem("dayflowEmail", email);
            localStorage.setItem("dayflowPassword", password);
            localStorage.setItem("dayflowRole", role);


            message.textContent =
                "Account created successfully!";

            message.style.color = "#16a34a";


            setTimeout(function () {

                window.location.href = "signin.html";

            }, 800);

        });
    }


    /* =====================================================
       LOGOUT
       ===================================================== */

    const logoutButton =
        document.getElementById("logoutButton");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("dayflowLoggedIn");
            localStorage.removeItem("dayflowRole");

            window.location.href = "signin.html";

        });
    }


    /* =====================================================
       CHECK IN
       ===================================================== */

    const checkInButton =
        document.getElementById("checkInButton");

    if (checkInButton) {

        checkInButton.addEventListener("click", function () {

            const currentTime =
                new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit"
                });

            localStorage.setItem(
                "checkInTime",
                currentTime
            );

            alert(
                "Check In successful!\nTime: " +
                currentTime
            );

            checkInButton.disabled = true;
            checkInButton.textContent = "Checked In";

        });
    }


    /* =====================================================
       CHECK OUT
       ===================================================== */

    const checkOutButton =
        document.getElementById("checkOutButton");

    if (checkOutButton) {

        checkOutButton.addEventListener("click", function () {

            const currentTime =
                new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit"
                });

            localStorage.setItem(
                "checkOutTime",
                currentTime
            );

            alert(
                "Check Out successful!\nTime: " +
                currentTime
            );

            checkOutButton.disabled = true;
            checkOutButton.textContent = "Checked Out";

        });
    }


    /* =====================================================
       LEAVE APPLICATION
       ===================================================== */

    const leaveForm =
        document.getElementById("leaveForm");

    if (leaveForm) {

        leaveForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fromDate =
                document.getElementById("fromDate").value;

            const toDate =
                document.getElementById("toDate").value;

            if (toDate < fromDate) {

                alert(
                    "To Date cannot be earlier than From Date."
                );

                return;
            }

            localStorage.setItem(
                "leaveStatus",
                "Pending"
            );

            alert(
                "Leave request submitted successfully!"
            );

            leaveForm.reset();

        });
    }


    /* =====================================================
       PROFILE
       ===================================================== */

    const profileForm =
        document.getElementById("profileForm");

    if (profileForm) {

        /* Load saved profile */

        const savedName =
            localStorage.getItem("profileName");

        const savedEmail =
            localStorage.getItem("profileEmail");


        if (savedName) {

            document.getElementById(
                "profileName"
            ).value = savedName;

        }


        if (savedEmail) {

            document.getElementById(
                "profileEmail"
            ).value = savedEmail;

        }


        profileForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.getElementById(
                        "profileName"
                    ).value.trim();

                const email =
                    document.getElementById(
                        "profileEmail"
                    ).value.trim();


                localStorage.setItem(
                    "profileName",
                    name
                );

                localStorage.setItem(
                    "profileEmail",
                    email
                );


                alert(
                    "Profile changes saved successfully!"
                );

            }
        );
    }


    /* =====================================================
       PROFILE PICTURE
       ===================================================== */

    const profilePicture =
        document.getElementById("profilePicture");

    if (profilePicture) {

        profilePicture.addEventListener(
            "change",
            function () {

                const file =
                    profilePicture.files[0];

                if (!file) {
                    return;
                }

                const reader =
                    new FileReader();


                reader.onload = function (event) {

                    const avatar =
                        document.querySelector(".avatar");

                    if (avatar) {

                        avatar.style.backgroundImage =
                            "url('" +
                            event.target.result +
                            "')";

                        avatar.style.backgroundSize =
                            "cover";

                        avatar.style.backgroundPosition =
                            "center";

                        avatar.textContent = "";

                    }

                };


                reader.readAsDataURL(file);

            }
        );
    }


    /* =====================================================
       DOCUMENT UPLOAD
       ===================================================== */

    const documents =
        document.getElementById("documents");

    if (documents) {

        documents.addEventListener(
            "change",
            function () {

                if (documents.files.length > 0) {

                    alert(
                        documents.files.length +
                        " document(s) selected."
                    );

                }

            }
        );
    }


    /* =====================================================
       EMPLOYEE SEARCH
       ===================================================== */

    const employeeSearch =
        document.getElementById("employeeSearch");

    if (employeeSearch) {

        employeeSearch.addEventListener(
            "input",
            function () {

                const searchValue =
                    employeeSearch.value.toLowerCase();

                const rows =
                    document.querySelectorAll(
                        "#employeeTableBody tr"
                    );


                rows.forEach(function (row) {

                    const rowText =
                        row.textContent.toLowerCase();


                    if (
                        rowText.includes(searchValue)
                    ) {

                        row.style.display = "";

                    } else {

                        row.style.display = "none";

                    }

                });

            }
        );
    }


    /* =====================================================
       ADD EMPLOYEE
       ===================================================== */

    const addEmployeeButton =
        document.getElementById(
            "addEmployeeButton"
        );

    if (addEmployeeButton) {

        addEmployeeButton.addEventListener(
            "click",
            function () {

                const employeeId =
                    prompt("Enter Employee ID:");

                if (!employeeId) return;


                const name =
                    prompt("Enter Employee Name:");

                if (!name) return;


                const email =
                    prompt("Enter Employee Email:");

                if (!email) return;


                const job =
                    prompt("Enter Job:");

                if (!job) return;


                const department =
                    prompt("Enter Department:");

                if (!department) return;


                const tableBody =
                    document.getElementById(
                        "employeeTableBody"
                    );


                const row =
                    document.createElement("tr");


                row.innerHTML = `
                    <td>${employeeId}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${job}</td>
                    <td>${department}</td>
                    <td>
                        <button class="viewEmployee">
                            View
                        </button>
                    </td>
                `;


                tableBody.appendChild(row);


                alert(
                    "Employee added successfully!"
                );

            }
        );
    }


    /* =====================================================
       VIEW EMPLOYEE
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "viewEmployee"
                )
            ) {

                const row =
                    event.target.closest("tr");

                const employeeId =
                    row.cells[0].textContent;

                const name =
                    row.cells[1].textContent;

                const email =
                    row.cells[2].textContent;


                alert(
                    "Employee Details\n\n" +
                    "ID: " + employeeId + "\n" +
                    "Name: " + name + "\n" +
                    "Email: " + email
                );

            }

        }
    );


    /* =====================================================
       LEAVE APPROVAL
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "approve"
                )
            ) {

                const row =
                    event.target.closest("tr");

                const status =
                    row.querySelector(".pending");


                if (status) {

                    status.textContent =
                        "Approved";

                    status.classList.remove(
                        "pending"
                    );

                    status.classList.add(
                        "approved"
                    );

                }


                event.target.disabled = true;


                const rejectButton =
                    row.querySelector(".reject");


                if (rejectButton) {

                    rejectButton.disabled = true;

                }


                alert(
                    "Leave request approved successfully."
                );

            }


            if (
                event.target.classList.contains(
                    "reject"
                )
            ) {

                const row =
                    event.target.closest("tr");

                const status =
                    row.querySelector(".pending");


                if (status) {

                    status.textContent =
                        "Rejected";

                    status.classList.remove(
                        "pending"
                    );

                    status.classList.add(
                        "rejected"
                    );

                }


                event.target.disabled = true;


                const approveButton =
                    row.querySelector(".approve");


                if (approveButton) {

                    approveButton.disabled = true;

                }


                alert(
                    "Leave request rejected."
                );

            }

        }
    );


    /* =====================================================
       UPDATE SALARY
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "updateSalary"
                )
            ) {

                const row =
                    event.target.closest("tr");

                const salaryInput =
                    row.querySelector("input");

                const salaryCell =
                    row.cells[3];

                const salary =
                    Number(salaryInput.value);


                if (salary <= 0) {

                    alert(
                        "Please enter a valid salary."
                    );

                    return;
                }


                salaryCell.textContent =
                    "₹" +
                    salary.toLocaleString("en-IN");


                alert(
                    "Salary updated successfully!"
                );

            }

        }
    );


    /* =====================================================
       PRINT SALARY
       ===================================================== */

    const printSalary =
        document.getElementById("printSalary");

    if (printSalary) {

        printSalary.addEventListener(
            "click",
            function () {

                window.print();

            }
        );
    }


    /* =====================================================
       PRINT REPORT
       ===================================================== */

    const printReport =
        document.getElementById("printReport");

    if (printReport) {

        printReport.addEventListener(
            "click",
            function () {

                window.print();

            }
        );
    }


    /* =====================================================
       SALARY REPORT
       ===================================================== */

    const salaryReport =
        document.getElementById("salaryReport");

    if (salaryReport) {

        salaryReport.addEventListener(
            "click",
            function () {

                alert(
                    "Salary Report generated successfully!"
                );

            }
        );
    }


    /* =====================================================
       ATTENDANCE REPORT
       ===================================================== */

    const attendanceReport =
        document.getElementById("attendanceReport");

    if (attendanceReport) {

        attendanceReport.addEventListener(
            "click",
            function () {

                alert(
                    "Attendance Report generated successfully!"
                );

            }
        );
    }


    /* =====================================================
       ADMIN ATTENDANCE FILTER
       ===================================================== */

    const employeeFilter =
        document.getElementById(
            "employeeFilter"
        );

    if (employeeFilter) {

        employeeFilter.addEventListener(
            "change",
            function () {

                const selected =
                    employeeFilter.value.toLowerCase();

                const rows =
                    document.querySelectorAll(
                        ".admin-attendance-page tbody tr"
                    );


                rows.forEach(function (row) {

                    const employeeId =
                        row.cells[0]
                            .textContent
                            .toLowerCase();


                    if (
                        selected === "" ||
                        employeeId === selected
                    ) {

                        row.style.display = "";

                    } else {

                        row.style.display = "none";

                    }

                });

            }
        );
    }


    /* =====================================================
       ATTENDANCE VIEW
       ===================================================== */

    const attendanceView =
        document.getElementById(
            "attendanceView"
        );

    if (attendanceView) {

        attendanceView.addEventListener(
            "change",
            function () {

                if (
                    attendanceView.value === "daily"
                ) {

                    alert(
                        "Daily attendance view selected."
                    );

                } else {

                    alert(
                        "Weekly attendance view selected."
                    );

                }

            }
        );
    }

});