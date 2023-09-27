import { Link } from "react-router-dom";
import "./cards.css"

const PlansPricing = () => {
  return (
    <div className="row d-flex align-items-center justify-content-center mb-5">
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card cardhead mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title card1 text-muted text-uppercase text-center">FREE</h5>
          <h6 className="card-title card2 text-center">$0<span className="per">/month</span></h6>
          <ul>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Single User</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> 5GB Storage</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Unlimited Public Projects</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Community Access</li>
            <li className="text-muted mb-2"><span><i className="fa fa-times" aria-hidden="true"></i></span> Unlimited Private Projects</li>
            <li className="text-muted mb-2"><span><i className="fa fa-times" aria-hidden="true"></i></span> Dedicated Phone Support</li>
            <li className="text-muted mb-2"><span><i className="fa fa-times" aria-hidden="true"></i></span> Free Subdomain</li>
            <li className="text-muted mb-2"><span><i className="fa fa-times" aria-hidden="true"></i></span> Monthly Status Reports</li>
          </ul>
          <div className="but text-center">
            <Link to="/register"><button className="btn btn-primary">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card cardhead mb-5 mb-lg-0" >
        <div className="card-body">
          <h5 className="card-title card1 text-muted text-uppercase text-center">PLUS</h5>
          <h6 className="card-title card2 text-center">$9<span className="per">/month</span></h6>
          <ul>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> <b>5 Users</b></li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> 50GB Storage</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Unlimited Public Projects</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Community Access</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Unlimited Private Projects</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Dedicated Phone Support</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Free Subdomain</li>
            <li className="text-muted mb-2"><span><i className="fa fa-times" aria-hidden="true"></i></span> Monthly Status Reports</li>
          </ul>
          <div className="but text-center">
          <Link to="/register"><button className="btn btn-primary">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 ">
      <div className="card cardhead mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title card1 text-muted text-uppercase text-center">PRO</h5>
          <h6 className="card-title card2 text-center">$49<span className="per">/month</span></h6>
          <ul>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> <b>Unlimited Users</b></li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> 50GB Storage</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Unlimited Public Projects</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Community Access</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Unlimited Private Projects</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Dedicated Phone Support</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> <b>Unlimited</b> Subdomain</li>
            <li className="mb-2"><span><i className="fa fa-check" aria-hidden="true"></i></span> Monthly Status Reports</li>
          </ul>
          <div className="but text-center">
          <Link to="/register"><button className="btn btn-primary">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlansPricing;
