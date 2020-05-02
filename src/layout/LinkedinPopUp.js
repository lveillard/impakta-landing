import { Component } from "react";
import QueryString from "query-string";

class LinkedInPopUp extends Component {
  componentDidMount() {
    const params = QueryString.parse(window.location.search);

    console.log("params", params);
    if (params.error) {
      const errorMessage =
        params.error_description || "Login failed. Please try again.";
      window.opener &&
        window.opener.postMessage(
          {
            error: params.error,
            state: params.state,
            errorMessage,
            from: "Linked In",
          },
          window.location.origin
        );
      // Close tab if user cancelled login
      if (
        params.error === "user_cancelled_login" ||
        params.error === "user_cancelled_authorize"
      ) {
        window.close();
      }
    }
    if (params.code) {
      window.opener &&
        window.opener.postMessage(
          { code: params.code, state: params.state, from: "Linked In" },
          window.location.origin
        );
      //cerrar ventana

      window.close();
    }

    if (params.linkedin_redirect_url) {
      console.log("hello");

      window.location.href = params.linkedin_redirect_url;
    }
  }
  render() {
    return null;
  }
}

export default LinkedInPopUp;
