import React from 'react';
import './App.css';
import Command from './Command';
import Permission from './Permission';

type LevelType = "owner" | "group" | "others";

interface Props {
}

interface State {
  owner: number,
  group: number,
  others: number,
}

class App extends React.Component<Props, State> {
  state = {
    owner: 0,
    group: 0,
    others: 0,
  };

  valueHandler(level: LevelType, value: number) {
    this.setState({
      owner: (level === "owner") ? value : this.state.owner,
      group: (level === "group") ? value : this.state.group,
      others: (level === "others") ? value : this.state.others,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App container">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="col-4">
            <Permission name="Owner" onChange={(value) => this.valueHandler("owner", value)} />
          </div>
          <div className="col-4">
            <Permission name="Group" onChange={(value) => this.valueHandler("group", value)} />
          </div>
          <div className="col-4">
            <Permission name="Others" onChange={(value) => this.valueHandler("others", value)} />
          </div>
        </div>
        <Command chmodValue={this.state} />
        <div className="callout">
          <p>Modes are the filesystem permissions given to "user", "group" and "others" classes to access files under Unix.
            <br />
            <span className="badge bg-light"><code>chmod</code></span> allow you to change those permissions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
