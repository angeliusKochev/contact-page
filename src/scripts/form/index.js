import { availableInterests } from "./consts";
import { validate } from "./validation";
import request from "./request";
const selectedTag = "select-tag";

const interests = {
  selectedIntersts: [],
  availableInterests: availableInterests,
  selectedValuesToString: function () {
    const values = [];
    for (const index in this.selectedIntersts) {
      values.push(this.availableInterests[index]);
    }
    return values.join(", ");
  },
  isSelected: function (index) {
    return this.selectedIntersts.includes(index);
  },
  select: function (index) {
    this.selectedIntersts.push(index);
  },
  unselect: function (index) {
    this.selectedIntersts = this.selectedIntersts.filter(
      (interest) => interest !== index
    );
  },
};

const buttons = document.querySelectorAll("div.tag");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!interests.isSelected(index)) {
      button.classList.add(selectedTag);
      interests.select(index);
    } else {
      button.classList.remove(selectedTag);
      interests.unselect(index);
    }
  });
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const data = {
    rows: [
      {
        cells: [
          {
            column: "Name",
            value: document.getElementById("name").value,
          },
          {
            column: "Email",
            value: document.getElementById("email").value,
          },
          {
            column: "Message",
            value: document.getElementById("message").value,
          },
          // {
          //   column: "Interests",
          //   value: interests.selectedValuesToString(),
          // },
          {
            column: "Date",
            value: new Date(),
          },
        ],
      },
    ],
  };

  try {
    validate();
    await request.rows.create(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
});
