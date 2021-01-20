import React from 'react';
import './App.css';
import Command from './Command';
import Permission from './Permission';

type LevelType = "owner" | "group" | "public";

interface Props {
}

interface State {
  owner: number,
  group: number,
  public: number,
}

class App extends React.Component<Props, State> {
  state = {
    owner: 0,
    group: 0,
    public: 0,
  };

  valueHandler(level: LevelType, value: number) {
    this.setState({
      owner: (level === "owner") ? value : this.state.owner,
      group: (level === "group") ? value : this.state.group,
      public: (level === "public") ? value : this.state.public,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4">
            <Permission name="Owner" onChange={(value) => this.valueHandler("owner", value)} />
          </div>
          <div className="col-4">
            <Permission name="Group" onChange={(value) => this.valueHandler("group", value)} />
          </div>
          <div className="col-4">
            <Permission name="Public" onChange={(value) => this.valueHandler("public", value)} />
          </div>
        </div>
        <Command />
      </div>
    );
  }
}

export default App;
