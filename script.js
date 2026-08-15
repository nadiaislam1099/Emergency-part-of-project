// ================= PAGE CHANGE =================

// Emergency page
let emergencyPage =
    document.getElementById("emergencyPage");

// Contact page
let contactPage =
    document.getElementById("contactPage");


// Open contact page
document.getElementById("openContacts")
    .addEventListener("click", function () {

        emergencyPage.classList.add("hidden");

        contactPage.classList.remove("hidden");

    });


// Back to emergency page
document.getElementById("backButton")
    .addEventListener("click", function () {

        contactPage.classList.add("hidden");

        emergencyPage.classList.remove("hidden");

    });



// ================= SOS BUTTON =================

document.getElementById("sosButton")
    .addEventListener("click", function () {

        let answer = prompt(
            "🚨 EMERGENCY SOS\n\n" +
            "Type YES to activate SOS:"
        );


        if (
            answer &&
            answer.toUpperCase() === "YES"
        ) {

            alert(
                "🚨 SOS ACTIVATED!\n\n" +
                "Please contact emergency services " +
                "or a trusted person immediately."
            );

        }

        else {

            alert("SOS cancelled.");

        }

    });



// ================= CONTACT DATA =================

let contacts = [

    {
        name: "Father",
        relationship: "Father",
        number: "01700000000"
    },

    {
        name: "Mother",
        relationship: "Mother",
        number: "01800000000"
    },

    {
        name: "Best Friend",
        relationship: "Friend",
        number: "01900000000"
    }

];



// ================= SHOW CONTACTS =================

function displayContacts() {

    let list =
        document.getElementById("contactList");

    list.innerHTML = "";


    contacts.forEach(function (contact, index) {

        list.innerHTML += `

            <div class="contact-card">

                <div class="contact-icon">
                    👤
                </div>

                <div class="relationship">
                    ${contact.relationship}
                </div>

                <h3>
                    ${contact.name}
                </h3>

                <p>
                    ${contact.number}
                </p>


                <a href="tel:${contact.number}">
                    <button class="call-btn">
                        📞 Call
                    </button>
                </a>


                <button
                    class="edit-btn"
                    onclick="editContact(${index})">

                    ✏️ Edit

                </button>


                <button
                    class="delete-btn"
                    onclick="deleteContact(${index})">

                    Delete

                </button>

            </div>

        `;

    });

}



// ================= ADD CONTACT =================

document.getElementById("addContact")
    .addEventListener("click", function () {

        let name = prompt(
            "Enter contact name:"
        );

        if (!name) {
            alert("Please enter a name.");
            return;
        }


        let relationship = prompt(
            "Enter relationship:\n" +
            "Example: Father, Mother, Sister, Friend"
        );

        if (!relationship) {
            alert("Please enter relationship.");
            return;
        }


        let number = prompt(
            "Enter phone number:"
        );

        if (!number) {
            alert("Please enter phone number.");
            return;
        }


        contacts.push({

            name: name,

            relationship: relationship,

            number: number

        });


        alert(
            "✅ Emergency contact added!"
        );


        displayContacts();

    });



// ================= EDIT CONTACT =================

function editContact(index) {

    let contact = contacts[index];


    let newName = prompt(
        "Update contact name:",
        contact.name
    );

    if (!newName) return;


    let newRelationship = prompt(
        "Update relationship:",
        contact.relationship
    );

    if (!newRelationship) return;


    let newNumber = prompt(
        "Update phone number:",
        contact.number
    );

    if (!newNumber) return;


    contact.name = newName;

    contact.relationship = newRelationship;

    contact.number = newNumber;


    alert(
        "✅ Contact updated successfully!"
    );


    displayContacts();

}



// ================= DELETE CONTACT =================

function deleteContact(index) {

    let answer = confirm(
        "Are you sure you want to delete this contact?"
    );

    if (answer) {

        contacts.splice(index, 1);

        displayContacts();

        alert(
            "Contact deleted successfully."
        );

    }
    // ================= EMERGENCY SOS CARD =================

document.getElementById("emergencySOS")
    .addEventListener("click", function () {

        let answer = prompt(
            "🚨 EMERGENCY SOS\n\nType YES to activate SOS:"
        );

        if (answer && answer.toUpperCase() === "YES") {

            alert("🚨 SOS ACTIVATED!");

        }

    });


// ================= EMERGENCY 999 CARD =================

document.getElementById("call999")
    .addEventListener("click", function () {

        let answer = confirm(
            "📞 Call 999?\n\nDo you want to call Emergency 999?"
        );

        if (answer) {

            window.location.href = "tel:999";

        }

    });


// ================= TRUSTED CONTACTS CARD =================

document.getElementById("trustedContacts")
    .addEventListener("click", function () {

        window.location.href = "contacts.html";

    });
 document.getElementById("call999").addEventListener("click", function () {

    let answer = confirm(
        "📞 EMERGENCY 999\n\n" +
        "Do you want to call 999?"
    );

    if (answer) {

        window.location.href = "tel:999";

    }

});
window.location.href = "tel:999";
}



// ================= INITIAL DISPLAY =================

displayContacts();