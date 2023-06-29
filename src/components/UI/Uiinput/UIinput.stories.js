import { useState } from "react";
import UIinput from "./UIinput";
export default {
  title: "Ui-Kit/Uiinput",
  component: UIinput,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  const handleInputChange = (value) => setValue(value);

  return (
    <UIinput {...args} value={value} handleInputChange={handleInputChange} />
  );
};

// export const Primary = Template.bind({})
const props = {
  value: "",
  handleInputChange: () => console.log("Hello storybook"),
  placeholder: "Placeholder",
  classes: "",
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
// value={value}
// onChange={(e) => handleInputChange(e.target.value)}
// placeholder={placeholder}
// className={styles.input}
