import { userInfo } from "os";
import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: { username: "", img_url: "", public_repos: null },
    };
    console.log(this.props.order + " child constructor");
  }

  componentDidUpdate() {
    console.log(this.props.order + " child componentDidUpdate");
  }

  async componentDidMount() {
    console.log(this.props.order + " child componentDidMount");
    const res = await fetch("https://api.github.com/users/malayproject");
    const json = await res.json();
    console.log("json", json);
    this.setState({
      userInfo: {
        username: json.login,
        img_url: json.avatar_url,
        public_repos: json.public_repos,
      },
    });
  }
  componentWillUnmount() {
    console.log(this.props.order + " child componentWIllUnmount");
  }

  render() {
    const { name, location, order } = this.props;
    const { count, count2, userInfo } = this.state;
    console.log(order + " child render");
    return (
      <div>
        <div>{name}</div>
        <div>{location}</div>
        <div>count: {count}</div>
        <button
          className="border-2"
          onClick={() => {
            this.setState({ count: count + 1, count2: count2 + 2 });
          }}
        >
          Increment Count
        </button>
        <div>count2: {count2}</div>
        <div className="mt-8">
          <img src={userInfo.img_url} alt="avatar.jpeg" />
          <div>Username: {userInfo.username}</div>
          <div>Public Repos: {userInfo.public_repos}</div>
        </div>
      </div>
    );
  }
}

export default UserClass;
