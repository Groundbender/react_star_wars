import UiButton from "./UIButton";
export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
};

// const Template = (args) => <UiButton {...args} />;

// export const Primary = Template.bind({})

const props = {
  text: "Hello",
  onClick: () => console.log("Hello storybook"),
  disabled: true,
  theme: "dark",
  classes: "",
};

export const Light = {
  args: {
    ...props,
    theme: "light",
  },
};
export const Dark = {
  args: {
    ...props,
    theme: "dark",
  },
};
export const Disabled = {
  args: {
    ...props,
    disabled: true,
  },
};
