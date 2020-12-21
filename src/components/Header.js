function Header() {
    const sendEmail = (e) => {

    }

    return (
        <section className="header">
            <h2>Hi, I'm Jigten</h2>
            <p>
                Computer Scientist | Web Developer | Data Scientist
            </p>
            <button className="btn" onClick={(e) => sendEmail(e)}>Connect With Me</button>
        </section>
    )
}

export default Header;