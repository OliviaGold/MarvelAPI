import React from "react";

class Input extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;

    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <input className="input" name={name} value={value} onChange={onChange} placeholder="Type a name here..."/>
      </div>
    )
  }
}

export default Input;