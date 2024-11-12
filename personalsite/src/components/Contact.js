import Card from './Card';
import { FaDiscord } from "react-icons/fa";


function openLink(link) {
    window.open(link);
}
function Contact() {
    const contactIcons = [
        < FaDiscord className="Discord" size="10px" color="black" onClick={() => openLink("")} />
    ]

    return (
        <section className="Contact">
            <Card description={""} headerText={"Contact me! "}></Card>
        </section>
    )
}

export default Contact;