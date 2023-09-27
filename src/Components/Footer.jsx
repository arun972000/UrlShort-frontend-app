import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer py-4 text-white">
    <div className="container"><div className="row ">
      <div className="col-md-4">
        <h4>Features</h4>
        <ul className="list-unstyled mb-0">
          <li><a href="#">Extension</a></li>
          <li><a href="#">API Docs</a></li>
          <li><a href="#">QR Code Generator</a></li>
          <li><a href="#">Recommended Tools</a></li>
          <li><a href="#">Sign Up</a></li></ul></div>
      <div className="col-md-4"><h4>Resources</h4> <ul className="list-unstyled mb-0">
        <li><a href="#" target="_top">Report Link</a></li>
        <li><a href="#">FAQ</a></li> <li><a href="#">Affiliates</a></li>
        <li><a href="#" className="text-muted">Privacy</a></li> <li><a href="#">Terms</a></li></ul>
      </div> <div className="col-md-4"><h4>Company</h4> <ul className="list-unstyled mb-0"><li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li> <li><a href="#">Contact</a></li> <li><a href="#">Twitter</a>
        </li> <li><a href="#">Facebook</a></li> <li><a href="#">LinkedIn</a></li>
      </ul>
      </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer