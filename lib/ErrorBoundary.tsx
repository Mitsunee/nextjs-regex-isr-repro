import { useStore } from "@nanostores/react";
import { action, atom } from "nanostores";
import { Component } from "react";

const errorStore = atom<[string,string][]>([]);
export const useErrorStore = () => useStore(errorStore);

const pushToErrorStore = action(errorStore, "push to store", (store, name: string, message: string) => {
  const oldArr = store.get();
  if (oldArr.some(([it]) => it == name)) return;
  store.set([...oldArr, [name, message]]);
})

interface State {
  hasError?: boolean;
}

interface Props extends React.PropsWithChildren {
  name: string;
  li?: boolean;
}

/* eslint-disable no-unused-vars */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(this.props.name, error, info.componentStack);
    pushToErrorStore(this.props.name, error.message);
  }

  render() {
    if (this.state.hasError) {
      console.warn(`Rendered Fallback in ErrorBoundary: ${this.props.name}`);

      if (this.props.li) {
        return <li>
          <p>Error in {this.props.name}</p>
        </li>
      }

      return (
        <div>
          <p>Error in {this.props.name}</p>
        </div>
      );
    }

    return this.props.children;
  }
}