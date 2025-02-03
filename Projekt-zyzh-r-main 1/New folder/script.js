// Select all the email buttons and the email view section
const emailButtons = document.querySelectorAll('.emails button');
const emailView = document.querySelector('.emailview');
const newButton = document.querySelector('.new');
const replyButton = document.querySelector('.reply');
const forwardButton = document.querySelector('.forward');
const markUnreadButton = document.querySelector('.mark-unread');
const binButton = document.querySelector('.bin');

const emailContent = {
  e1: {
    subject: "Email 1",
    body: "This is the content of email 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  e2: {
    subject: "Email 2",
    body: "This is the content of email 2. Quod vitae adipisci quaerat expedita quis, animi nemo aspernatur id."
  },
  e3: {
    subject: "Email 3",
    body: "This is the content of email 3. Doloribus similique exercitationem voluptatum ducimus explicabo rem iure."
  },
  e4: {
    subject: "Email 4",
    body: "This is the content of email 4. Voluptas asperiores doloremque reprehenderit in porro, tempora eius id!"
  },
  e5: {
    subject: "Email 5",
    body: "This is the content of email 5. Adipisci, labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  e6: {
    subject: "Email 6",
    body: "This is the content of email 6. Deserunt exercitationem non quas sit provident velit magni optio dolore."
  }
};


let selectedEmailId = null;


function updateEmailView(emailId) {
  const email = emailContent[emailId];
  if (email) {
    selectedEmailId = emailId;
    emailView.innerHTML = `
      <h1>${email.subject}</h1>
      <p>${email.body}</p>
    `;
  }
}

emailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const emailId = button.classList[0]; // Get the class name (e1, e2, etc.)
    updateEmailView(emailId);
  });
});


newButton.addEventListener('click', () => {
 
  const newEmail = prompt("Enter new email content:");
  if (newEmail) {
    alert("New email created!");
  }
});


replyButton.addEventListener('click', () => {
  if (selectedEmailId) {
    const replyContent = prompt(`Reply to: ${emailContent[selectedEmailId].subject}`);
    if (replyContent) {
      alert(`Reply sent: ${replyContent}`);
    }
  } else {
    alert("Select an email to reply to.");
  }
});


forwardButton.addEventListener('click', () => {
  if (selectedEmailId) {
    const forwardContent = prompt(`Forward email: ${emailContent[selectedEmailId].subject}`);
    if (forwardContent) {
      alert(`Email forwarded: ${forwardContent}`);
    }
  } else {
    alert("Select an email to forward.");
  }
});


markUnreadButton.addEventListener('click', () => {
  if (selectedEmailId) {
    alert(`${emailContent[selectedEmailId].subject} marked as unread.`);
  } else {
    alert("Select an email to mark as unread.");
  }
});


binButton.addEventListener('click', () => {
  if (selectedEmailId) {
    delete emailContent[selectedEmailId]; 
    alert(`Email "${emailContent[selectedEmailId].subject}" deleted.`);
    emailView.innerHTML = "<h1>Email Deleted</h1><p>The email has been removed.</p>";
  } else {
    alert("Select an email to delete.");
  }
});
