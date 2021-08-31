import { html, TemplateResult } from 'lit';
import '../src/air-web.js';

export default {
  title: 'AirWeb',
  component: 'air-web',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <air-web style="--air-web-background-color: ${backgroundColor}" .title=${title}></air-web>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
