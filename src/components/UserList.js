import React from "react";
import { connect } from "react-redux";
import { addUser } from "../store/actions";
import UserItem from "./UserItem";

class UserList extends React.Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newName = this.state.name.trim();
    if (!newName) {
      return;
    }

    this.props.addUser(newName);
    this.setState({ name: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input value={this.state.name} onChange={this.handleChange} />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {this.props.users.map((user) => (
            <UserItem key={user.id} id={user.id} name={user.name} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = { addUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
