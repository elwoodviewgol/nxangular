import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ReportHeaderComponent } from './report-header.component';

export default {
  title: 'ReportHeaderComponent',
  component: ReportHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ReportHeaderComponent>;

const Template: Story<ReportHeaderComponent> = (args: ReportHeaderComponent) => ({
  component: ReportHeaderComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}