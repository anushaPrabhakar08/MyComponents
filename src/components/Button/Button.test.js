import React from "react";
import Button from "./Button";
import {
  render,
  fireEvent,
  within,
  getByLabelText
} from "@testing-library/react";
import TextBox from "../TextBox/TextBox";

// describe("Generic Button component", () => {
//   it("should return a input type Button ", async () => {
//     const onClick = jest.fn();
//     const { getByLabelText, getByText } = render(
//       <Button
//         // onClick={onClick}
//         // text="Bond Implied"
//         // value="bond"
//         name="bond"
//       />
//     );
//     console.log(getByLabelText);
//     console.log(getByText);
//     fireEvent.click(getByText(/bondw/i));
//     fireEvent.getByText()
//     // expect(onClick).toHaveBeenCalled();
//   });
// });

describe("Button component", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });
  
  it("should have children",()=>{
    const { getByTestId, debug } = render(<Button>Submit</Button>);
    debug();
    // make the TextMatch for the children more specific
    const elem = getByTestId("btn-primary_1");
    expect(elem.innerHTML).toBe("Submit");
  });

  // it("should onClick function",()=>{
  //   const { getByTestId, debug } = render(
  //   <Button onClick="">Submit</Button>
  //   );
  //   debug();
  //   // make the TextMatch for the children more specific
  //   const elem = getByTestId("btn-primary_1");
  //   expect(elem.innerHTML).toBe("Submit");
  // });

});

describe("Primary Button component", () => {
  
  it("Generic Button Component be defined for Primary by default", () => {
    const { getByTestId, debug } = render(<Button />);
    debug();
    // make the default TextMatch more specific
    const elem = getByTestId("btn-primary_2");
    expect(elem.innerHTML).toBe("Button");
  });

  it("Generic Button Component className be defined for Primary", () => {
    const { getByTestId, debug } = render(
      <Button buttonType="primary">Primary</Button>
    );
    debug();
    // make the TextMatch more specific
    const elem = getByTestId("btn-primary_3");
    expect(elem.className).toBe("bui-button bui-primary-button");
  });

  it("Generic Button Component value be defined for Primary", () => {
    const { getByTestId, debug } = render(
      <Button buttonType="primary">Primary</Button>
    );
    debug();
    // make the TextMatch more specific
    const elem = getByTestId("btn-primary_4");
    expect(elem.value).toBe("Primary");
  });

  it("Generic Button Component be defined for Primary disabled", () => {
    const { getByTestId, debug } = render(
      <Button buttonType="primary" disabled={true}>
        Primary
      </Button>
    );
    debug();
    // make the TextMatch more specific
    const elem = getByTestId("btn-primary_5");
     //expect(elem.innerHTML.disabled).toBeTruthy()
  });

  it("Generic Button Component be defined fgsfg", () => {
  
  });

  //   test('[BROKEN]: calls onClick callback when "Click Me" is clicked', () => {
  //     const handleClick = jest.fn();
  //     const { getByText } = render(<Button onClick={handleClick} />);
  //     // this throws an error because multiple elements match the given TextMatch
  //     const clickMeButton = getByText(/button/i);
  //     fireEvent.click(clickMeButton);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //   });

  //   test('[WORKING]: calls onClick callback when "Click Me" is clicked', () => {
  //     const handleClick = jest.fn();
  //     const { getAllByText } = render(<Button onClick={handleClick} />);
  //     // select the first element... this is ok, and it's how things worked before,
  //     // but look at the next test for a better way to do this.
  //     const clickMeButton = getAllByText(/Button/i)[0];
  //     fireEvent.click(clickMeButton);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //   });

  //   test("[WORKING BETTER]: calls onClick callback when Button is clicked", () => {
  //     const handleClick = jest.fn();
  //     const { getByText } = render(<Button onClick={handleClick} />);
  //     // make the TextMatch more specific
  //     const clickMeButton = getByText(/preeti/i);
  //     fireEvent.click(clickMeButton);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //   });
});
describe("Secondary Button component", () => {

  it("Generic Button Component be defined for Secondary by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="secondary">Secondary</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-secondary_6");
      expect(elem.innerHTML).toBe("Secondary");
      expect(elem.className).toBe("bui-button bui-secondary-button");
      expect(elem.value).toBe("Secondary");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Secondary by Disabled", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="secondary" disabled>Secondary</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-secondary_7");
      expect(elem.innerHTML).toBe("Secondary");
      expect(elem.className).toBe("bui-button bui-secondary-disabled");
      expect(elem.value).toBe("Secondary");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });
});

describe("Accent Button component", () => {

  it("Generic Button Component be defined for Accent by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="accent">Accent</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-accent_8");
      expect(elem.innerHTML).toBe("Accent");
      expect(elem.className).toBe("bui-button bui-accent-button");
      expect(elem.value).toBe("Accent");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Accent by Disabled", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="accent" disabled>Accent</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-accent_9");
      expect(elem.innerHTML).toBe("Accent");
      expect(elem.className).toBe("bui-button bui-accent-disabled");
      expect(elem.value).toBe("Accent");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });
});

describe("Signal Button component", () => {

  it("Generic Signal Button Component be defined for Warning by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="warning">Warning</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-warning_10");
      expect(elem.innerHTML).toBe("Warning");
      expect(elem.className).toBe("bui-button bui-warning-button");
      expect(elem.value).toBe("Warning");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Singal Button Component be defined for Warning by disabled", () => {
      const { getByTestId, debug } = render(
        <Button buttonType="warning" disabled>Warning</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-warning_11");
      expect(elem.innerHTML).toBe("Warning");
      expect(elem.className).toBe("bui-button bui-warning-disabled");
      expect(elem.value).toBe("Warning");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Signal Button Component be defined for Error by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="error">Error</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-error_12");
      expect(elem.innerHTML).toBe("Error");
      expect(elem.className).toBe("bui-button bui-error-button");
      expect(elem.value).toBe("Error");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Singal Button Component be defined for Error by disabled", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="error" disabled>Error</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-error_13");
      expect(elem.innerHTML).toBe("Error");
      expect(elem.className).toBe("bui-button bui-error-disabled");
      expect(elem.value).toBe("Error");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Signal Button Component be defined for Success by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="success">Success</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-success_14");
      expect(elem.innerHTML).toBe("Success");
      expect(elem.className).toBe("bui-button bui-success-button");
      expect(elem.value).toBe("Success");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Singal Button Component be defined for Success by disabled", () => {
      const { getByTestId, debug } = render(
        <Button buttonType="success" disabled>Success</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-success_15");
      expect(elem.innerHTML).toBe("Success");
      expect(elem.className).toBe("bui-button bui-success-disabled");
      expect(elem.value).toBe("Success");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });
});

describe("Quite Button component", () => {

  it("Generic Button Component be defined for Quite Default by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="quite">Quite Default</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-quite_16");
      expect(elem.innerHTML).toBe("Quite Default");
      expect(elem.className).toBe("bui-button bui-quite-button");
      expect(elem.value).toBe("Quite Default");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Quite Default by Disabled", () => {
      const { getByTestId, debug } = render(
        <Button buttonType="quite" disabled>Quite Default</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-quite_17");
      expect(elem.innerHTML).toBe("Quite Default");
      expect(elem.className).toBe("bui-button bui-quite-disabled");
      expect(elem.value).toBe("Quite Default");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Quite Emphasis by default", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="emphasis">Quite Emphasis</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-emphasis_18");
      expect(elem.innerHTML).toBe("Quite Emphasis");
      expect(elem.className).toBe("bui-button bui-emphasis-button");
      expect(elem.value).toBe("Quite Emphasis");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Quite Emphasis by Disabled", () => {
      const { getByTestId, debug } = render(
      <Button buttonType="emphasis" disabled>Quite Emphasis</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-emphasis_19");
      expect(elem.innerHTML).toBe("Quite Emphasis");
      expect(elem.className).toBe("bui-button bui-emphasis-disabled");
      expect(elem.value).toBe("Quite Emphasis");
      expect(elem.type).toBe("button");
      //expect(elem.disabled).toBeTruthy();
    });
});

describe("Icon Button component", () => {

  it("Generic Button Component be defined for Icon by default", () => {
      const { getByTestId, debug,container } = render(
        <Button buttonType="icon" icon="search">Icon</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-icon_20");
      const icon = container.querySelector('span');
      expect(elem.innerHTML).toBe("<span class=\"icon bui-icon-search\"></span>");
      expect(elem.className).toBe("bui-button bui-icon-button");
      expect(elem.value).toBe("Icon");
      expect(elem.type).toBe("button");
      expect(icon.className).toBe("icon bui-icon-search");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Icon by Disabled", () => {
      const { getByTestId, debug, container } = render(
      <Button buttonType="icon"  icon="search" disabled>Icon</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-icon_21");
      const icon = container.querySelector('span');
      expect(elem.innerHTML).toBe("<span class=\"icon bui-icon-search\"></span>");
      expect(elem.className).toBe("bui-button bui-icon-disabled");
      expect(elem.value).toBe("Icon");
      expect(elem.type).toBe("button");
      expect(icon.className).toBe("icon bui-icon-search");      
      //expect(elem.disabled).toBeTruthy();
    });
   
});

describe("Icon Text Button component", () => {

  it("Generic Button Component be defined for Icon by default", () => {
      const { getByTestId, debug,container } = render(
        <Button buttonType="icon-text" icon="edit">Icon Text</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-icon-text_22");
      const icon = container.querySelector('span');
      expect(elem.className).toBe("bui-button bui-icon-text-button");
      expect(elem.value).toBe("Icon Text");
      expect(elem.type).toBe("button");
      expect(icon.className).toBe("icon bui-icon-edit-text");
      //expect(elem.disabled).toBeTruthy();
    });

    it("Generic Button Component be defined for Icon by Disabled", () => {
      const { getByTestId, debug, container } = render(
      <Button buttonType="icon-text"  icon="edit" disabled>Icon Text</Button>
      );
      debug();
      // make the TextMatch more specific
      const elem = getByTestId("btn-icon-text_23");
      const icon = container.querySelector('span');
      expect(elem.className).toBe("bui-button bui-icon-text-disabled");
      expect(elem.value).toBe("Icon Text");
      expect(elem.type).toBe("button");
      expect(icon.className).toBe("icon bui-icon-edit-text");
      //expect(elem.disabled).toBeTruthy();
    });
   
});
//expect(element(by.id('blah-label-id')).isEnabled()).toBe(false);