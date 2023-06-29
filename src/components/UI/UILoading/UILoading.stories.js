import UILoading from "./UILoading";
export default {
  title: "Ui-Kit/UILoading",
  component: UILoading,
};

// const Template = (args) => <UILoading {...args} />;

// export const Primary = Template.bind({})

const props = {
  theme: "black",
  isShadow: false,
  classes: "",
};

export const Black = {
  args: {
    ...props,
    theme: "black",
  },
};
export const White = {
  args: {
    ...props,
    theme: "white",
    isShadow: true,
  },
};
export const Blue = {
  args: {
    ...props,
    theme: "blue",
  },
};
