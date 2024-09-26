const mailto = "mailto:";
const name = "guillem.";
const surname = "gongora";
const at = "@";
const provider = "gmail";
const dotcom = ".com";

const fullEmail = (mailto + name + surname + at + provider + dotcom);

function sendEmail() {
    window.location = fullEmail;
};