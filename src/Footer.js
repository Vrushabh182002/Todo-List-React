const Footer = () => {
  const  year = new Date().getFullYear();
  return (
    <footer>
        <p>Copyrights &copy; {year}</p>
    </footer>
  )
}

export default Footer;