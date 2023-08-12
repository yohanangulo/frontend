import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Script from "next/script";

const Login = () => {
  return (
    <>
      <Header />
      {/* Page Title */}
      <section className="page-title text-center">
        <div className="container relative clearfix">
          <div className="title-holder">
            <div className="title-text">
              <h1 className="uppercase">My Account</h1>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* end page title */}
      {/* login */}
      <section className="section-wrap login-register pt-0 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-sm-offset-1 mb-40">
              <div className="login">
                <h4 className="uppercase">login</h4>
                <p className="form-row form-row-wide">
                  <label>
                    username or email
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    placeholder=""
                    defaultValue=""
                  />
                </p>
                <p className="form-row form-row-wide">
                  <label>
                    password
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    placeholder=""
                    defaultValue=""
                  />
                </p>
                <input type="submit" defaultValue="Login" className="btn" />
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="remember"
                  name="remember"
                  defaultValue={1}
                />
                <label htmlFor="remember" className="checkbox">
                  Remember me
                </label>
                <a href="#">Lost Password?</a>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="register">
                <h4 className="uppercase">Register</h4>
                <p className="form-row form-row-wide">
                  <label>
                    email
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    placeholder=""
                    defaultValue=""
                  />
                </p>
                <p className="form-row form-row-wide">
                  <label>
                    password
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    placeholder=""
                    defaultValue=""
                  />
                </p>
                <input type="submit" defaultValue="Register" className="btn" />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* end login */}

      <Footer />
    </>
  );
};
export default Login;
