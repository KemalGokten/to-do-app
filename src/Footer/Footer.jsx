import githubLogo from "../assets/images/github-logo.png"

const Footer = () => {
    return ( 
        <footer className="footer">
            <img src={githubLogo} alt="github logo" />
            <a href="https://github.com/KemalGokten/to-do-app/tree/main">Github repository</a>
        </footer>
     );
}
 
export default Footer;