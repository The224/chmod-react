import React from 'react';
import { getChmodOctal } from '../utils/chmod';
import './Permission.css';

type PermissionType = "read" | "write" | "execute";

interface Props {
  name: string;
  onChange: (value: number) => void;
}

interface State {
  value: number;
  read: boolean;
  write: boolean;
  execute: boolean;
}

class Permission extends React.Component<Props, State> {
  state = {
    value: 0,
    read: false,
    write: false,
    execute: false
  }

  handleClick(type: PermissionType) {
    this.setState({
      value: getChmodOctal(
        (type === "read") ? !this.state.read : this.state.read,
        (type === "write") ? !this.state.write : this.state.write,
        (type === "execute") ? !this.state.execute : this.state.execute,
      ),
      read: (type === "read") ? !this.state.read : this.state.read,
      write: (type === "write") ? !this.state.write : this.state.write,
      execute: (type === "execute") ? !this.state.execute : this.state.execute,
    }, () => this.props.onChange(this.state.value));
  }

  render() {
    return (
      <div className="permission">
        <h1>{this.props.name}</h1>
        <div className="selector">
          <div className="click-zone" onClick={(e) => this.handleClick("read")}>
            <input type="checkbox" checked={this.state.read}></input>
            <label htmlFor="read">Read</label>
          </div>
          <div className="click-zone" onClick={(e) => this.handleClick("write")}>
            <input type="checkbox" checked={this.state.write}></input>
            <label htmlFor="write">Write</label>
          </div>
          <div className="click-zone" onClick={(e) => this.handleClick("execute")}>
            <input type="checkbox" checked={this.state.execute}></input>
            <label htmlFor="execute">Execute</label>
          </div>
        </div>
      </div>
    );
  }
}
export default Permission;
