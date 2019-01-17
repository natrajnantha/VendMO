import React, { Component } from "react";
import Options from "../../components/Form/Options";
import API from "../../utils/API";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ value: value });
    this.props.processDropdown(value);
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    API.getCategories().then(res => this.setState({ items: res.data }));
  };

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.state.items.map(item => (
            <Options item={item.category} />
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
