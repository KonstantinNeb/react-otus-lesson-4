import App from './App';
export default {
  title: "App",
  component: App,
}

export const Default = () => <App />

export const Enlarged = () => <App vertCellCount={15} horizCellCount={15}/>