import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get list of all companies. */

  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  /** Get list of all jobs. */

  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }
  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  /** Sign a user up. */

  static async signup(formData) {
    let res = await this.request(`auth/register`, formData, "post");
    this.token = res.token;
    return res.token;
  }

  /** Log in a user. */

  static async login(formData) {
    let res = await this.request(`auth/token`, formData, "post");
    this.token = res.token;
    return res.token;
  }

  /** Gets a single user. */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }

  /** Patches a user. */

  static async patchUser(username, formData) {
    let res = await this.request(`users/${username}`, formData, "patch");
    return res;
  }

    /** Applies a user to a job. */

    static async applyUser(username, jobId) {
      let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
      return res;
    }

}

export default JoblyApi;