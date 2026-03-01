var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
    {
        userName: "Invalid",
        lastName: "User",
        email: "too.many.dots@gmail.com"
    },
    {
        userName: "Single",
        lastName: "Word",
        email: "singleword@yahoo.com"
    }
];

const emailRegex = /^[a-z0-9]+(?:\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

function getTrustedEmails(list) {
    const trusted = [];
    
    for (let i = 0; i < list.length; i++) {
        const currentEmail = list[i].email;
        if (currentEmail.match(emailRegex) !== null) {
            trusted[trusted.length] = currentEmail;
        }
    }   
    return trusted;
}

console.log("Довірені адреси:", getTrustedEmails(arr));