export interface IProps {
  dispatch: Function;
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: string;
  };
}
