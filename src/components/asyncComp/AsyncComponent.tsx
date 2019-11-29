import React from 'react';

type ICompProps = {};
type ICompState = {
  readonly Component?: keyof JSX.IntrinsicElements | any;
};

const AsyncComponent = (loadComponent: Function, loaddingComponent: any = null) =>
  class AsyncComponent extends React.Component<ICompProps, ICompState> {
    state: ICompState = {
      Component: null,
    };

    public componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      loadComponent()
        .then((module: any) => module.default)
        .then((Component: any) => {
          this.setState({ Component });
        })
        .catch((err: any) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    private hasLoadedComponent(): boolean {
      return this.state.Component !== null;
    }

    public render(): React.ReactNode {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : loaddingComponent;
    }
  };

export default AsyncComponent;
