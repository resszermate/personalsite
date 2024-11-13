import Card from './Card';
import { FaDiscord } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";


function openLink(link) {
    window.open(link);
}

function copyToClipboard(text) {
    navigator.clipboard.copyToClipboard(text);
    alert("Username copied!")
}

function Contact() {
    const contactIcons = [
        < FaDiscord className="Discord" size="10px" color="black" onClick={() => copyToClipboard("Abrams124#2657")} />,
        < CgMail className="Mail" size="10px" color="black" onClick={() => copyToClipboard("materesszer2@gmail.com")} />,
        < FaLinkedin className="LinkedIn" size="10px" color="black" onClick={() => openLink("linkedin.com/in/máté-resszer-152b361b6")} />
         
    ]

    return (
        <section className="Contact">
            <Card description={""} headerText={"Contact me! "}></Card>
        </section>
    )
}

export default Contact;