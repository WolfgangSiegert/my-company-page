//toggle visibility of Answer by clicked corresponding FAQ
//+++
document
  .getElementById("contact-faq-header-0")
  .addEventListener("click", function () {
    toggleFAQtexts(0);
  });

document
  .getElementById("contact-faq-header-1")
  .addEventListener("click", function () {
    toggleFAQtexts(1);
  });
document
  .getElementById("contact-faq-header-2")
  .addEventListener("click", function () {
    toggleFAQtexts(2);
  });
document
  .getElementById("contact-faq-header-3")
  .addEventListener("click", function () {
    toggleFAQtexts(3);
  });
document
  .getElementById("contact-faq-header-4")
  .addEventListener("click", function () {
    toggleFAQtexts(4);
  });

function toggleFAQtexts(paramFAQ_No) {
  toggleFAQIconAndAnswer(paramFAQ_No);
}

function toggleFAQIconAndAnswer(paramFAQ_No) {
  var iconFaq = document.getElementById(`faq-icon-${paramFAQ_No}`);
  //toggle corresponding answer element on click on headerline element
  if (
    iconFaq.parentElement.nextElementSibling.classList.contains("display-none")
  ) {
    console.log("true open");
    closeAllFAQs();
    //toggle answer text element to open
    iconFaq.parentElement.nextElementSibling.classList.remove("display-none");
    iconFaq.parentElement.nextElementSibling.classList.add("active-faq-answer");
    //changing Icon
    iconFaq.classList.remove("fa-angle-right");
    iconFaq.classList.add("fa-angle-down");
  } else {
    console.log("false closing");
    closeAllFAQs();
    //toggle answer text element to closed
    iconFaq.parentElement.nextElementSibling.classList.add("display-none");
    console.log("clicked+NO angle right");
    //changing Icon
    iconFaq.classList.add("fa-angle-right");
    iconFaq.classList.remove("fa-angle-down");
  }
}

function closeAllFAQs() {
  //closing all FAQ answers
  let faqAnswers = document.getElementsByClassName("faq-answer");
  let faqOpenHdrs = document.getElementsByClassName("fa-angle-down");
  console.log("closeALL");
  //closing all FAQ text elements
  for (const Element of faqAnswers) {
    if (Element.classList.contains("display-none")) {
      //   Element.classList.remove("display-none");
    } else {
      Element.classList.add("display-none");
      //   }
    }
  }
  //changing Icon of header to closed (Angle right)
  if (faqOpenHdrs != undefined) {
    for (const e of faqOpenHdrs) {
      if (e.classList.contains("fa-angle-right")) {
      } else {
        e.classList.remove("fa-angle-down");
        e.classList.add("fa-angle-right");
        e.to;
        //   }
      }
    }
  }
}
/*
//deprecated included in ToggleFAQIcon() didnt work correctly
 function toggleClicked(paramFAQ_No) {
  var faqAnswerToOpen = document.getElementById(
    `contact-faq-body-${paramFAQ_No}`
  );
  console.log("close clicked");
  if (faqAnswerToOpen.classList.contains("display-none")) {
    faqAnswerToOpen.classList.remove("display-none"); //here all elemts always are display none
  } else {
    faqAnswerToOpen.classList.add("display-none");
  }
} */
//---
