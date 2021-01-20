import React from "react"
import './Command.css';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/shell/shell');

interface Props {
}

interface State {
  value: string,
  copied: boolean
}

class Command extends React.Component<Props, State> {
  state = {
    value: 'chmod 664 your-file',
    copied: false,
  };

  render() {
    return (
      <div className="CodeMirror-Wrapper">
        <CodeMirror
          value={this.state.value}
          options={{
            mode: 'shell',
            theme: 'monokai',
            readOnly: true
          }}
          onChange={(editor, data, value) => {
            console.log({ editor, data, value });
            this.setState({ value, copied: false })
          }}
        />

        <div className="copy">
          <svg style={{ width: "30px", height: "30px" }} viewBox="0 0 24 24">
            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
          </svg>
        </div>


        {/* <input value={this.state.value}
          onChange={({ target: { value } }) => this.setState({ value, copied: false })} />

        {/* <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({ copied: true })}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({ copied: true })}>
          <button>Copy to clipboard with button</button>
        {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        </CopyToClipboard> */}

      </div>
    );
  }
}

export default Command;
