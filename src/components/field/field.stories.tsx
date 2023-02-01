import Field from './field';
export default {
  title: "Field",
  component: Field,
}

export const Default = () => <Field />

export const Enlarged = () => <Field vertCellCount={15} horizCellCount={15} />