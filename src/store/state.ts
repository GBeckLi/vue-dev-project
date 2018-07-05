interface GlobalState {
  login: boolean;
  activeMenu: string;
}

const globalState: GlobalState = {
  login: false,
  activeMenu: '1'
};

export default globalState;