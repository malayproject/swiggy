import { memo, Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../contexts/UserContext.js";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>Swiggy</h1>
        <UserContext.Consumer>
          {(userData) => <div>{userData.userName}</div>}
        </UserContext.Consumer>
        <div className=""></div>
        <p>This is a swiggy food delivery app.</p>
        <UserClass name="Malay" location="Gurgaon" order="first" />
        <UserClass name="Palash" location="Bangalore" order="second" />
        <UserClass name="Shanu" location="Delhi" order="third" />
      </div>
    );
  }
}

export default memo(AboutUs);
