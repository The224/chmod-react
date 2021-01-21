import React from "react"
import './Command.css';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/shell/shell');

interface Props {
  chmodValue: {
    owner: number,
    group: number,
    others: number,
  }
}

interface State {
  value: string,
  copied: boolean
}

class Command extends React.Component<Props, State> {
  state = {
    value: '',
    copied: false,
  };

  componentDidMount() {
    this.updateCommand();
  }

  componentDidUpdate(prevProps: Props) {
    this.updateCommand(prevProps);
  }

  updateCommand(prevProps?: Props) {
    if (prevProps !== this.props) {
      const { owner, group, others } = this.props.chmodValue;
      this.setState({
        value: `chmod ${owner}${group}${others} secret.creds`,
        copied: false
      });
    }
  }

  copy() {
    let copyText = document.createElement("textarea");
    if (this.props) {
      const { owner, group, others } = this.props.chmodValue;
      copyText.textContent = `${owner}${group}${others}`;
    }
    else
      copyText.textContent = `000`;
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    console.log({ copyText: copyText.textContent });
    document.execCommand('copy');
    if (copyText.parentNode)
      copyText.parentNode.removeChild(copyText);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  }

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

        <div className="copy" onClick={() => this.copy()} data-bs-toggle="tooltip" data-bs-placement="left" title="Copy numeric value">
          <p className="copied"> {this.state.copied ? <span style={{ color: 'red' }}>Copied!</span> : null}</p>
          <svg style={{ width: "30px", height: "30px" }} viewBox="0 0 24 24">
            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
          </svg>
        </div>

      </div>
    );
  }
}

export default Command;
