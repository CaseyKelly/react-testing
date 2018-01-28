import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe("CommentBox", () => {
  let component;
  let textarea;
  let button;

  beforeEach(() => {
    component = renderComponent(CommentBox);
    textarea = component.find("textarea")
    button = component.find("button")
  });

  it("has the correct class", () => {
    expect(component).to.have.class("comment-box");
  });

  it("has a text area", () => {
    expect(textarea).to.exist;
  });

  it("has a button", () => {
    expect(button).to.exist;
  });

  describe("entering some text", () => {

    beforeEach(() => {
      textarea.simulate("change", "new comment");
    });

    it("shows that text in text area", () => {
      expect(textarea).to.have.value("new comment");
    });

    it("when submitted, clears the input", () => {});
  });
});
