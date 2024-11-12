import Card from './Card';
import { FaDiscord } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


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
        < CgMail className="Mail" size="10px" color="black" onClick={() => copyToClipboard("materesszer2@gmail.com") } />,
    ]

    return (
        <section className="Contact">
            <Card description={""} headerText={"Contact me! "}></Card>
        </section>
    )
}

export default Contact;