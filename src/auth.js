const { authenticate, createJwt } =require("./passport") ;

const ON_HTTPS = false;

const ONE_MINUTE = 1000 * 60;
const ONE_DAY = ONE_MINUTE * 60 * 24;
const ONE_MONTH = ONE_DAY * 30;

class Auth {
  constructor({ req, res }) {
    this.req = req;
    this.res = res;
    this.isReady = false;
    this.hasSignedIn = false;
    this.accessTokenName = "ip_at";
  }

  async authenticate() {
    const { req , res } = this;
    const payload = await authenticate(req, res);
    if (payload) {
      this.payload = payload;
      this.isAdmin = payload.role === "admin";
      this.hasSignedIn = true;
    }
  }

  signInWithJWT(user) {
    const token = createJwt({ uid: user.id, role: user.role });
    return token;
  }

  logout() {
    this.res.clearCookie(this.accessTokenName);
  }

  getUserId() {
    return this.payload.uid;
  }
}

module.exports = {
  Auth
};
 
