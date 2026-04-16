let mobileBtnMenu = document.querySelector(".navbar-toggler");
let flag = false;
mobileBtnMenu.onclick = () => {
  let headerMenu = document.querySelector(".navbar-collapse");
  if (flag) {
    headerMenu.classList.add("transation");
    mobileBtnMenu.style.outline = "none";
    flag = false;
  } else {
    headerMenu.classList.remove("transation");
    headerMenu.style.height = "100%";
    mobileBtnMenu.style.outline = "1px solid #eee";
    flag = true;
  }
}


let skillsColors = ["#2c5eb0", "#ca2821", "#2c5eb0", "#1e9d51", "#4ba5c1", "#e1ac09", "#2c5eb0", "#7c43ba"];

let skills = fetch(`https://mohamed-abdeltwab-portfolio.free.nf/api/showSkills`)
  .then(response => {
    return response.json();
  }).then(json => {
    for (let i = 0; i < json.length; i++) {
      createSkill(i, json);
    }
  })

// let skills = "Laravel PHP REST APIs MySQL OOP JS Tailwind Bootstrap CSS HTML Python Dart".split(" ");
function createSkill(i, json) {
  let skillsBox = document.querySelector(".skills-box");
  let box = document.createElement("div");
  box.className = "box text-light p-md-4 p-1 d-flex flex-column text-center justify-content-center align-items-center rounded-4 scroll";
  let color = skillsColors[i % skillsColors.length];
  box.style.boxShadow = "0 0px 50px -20px " + color + "50";
  
  
  let icon = document.createElement("i");
  
  icon.className = json[i]["icon"];
  icon.style.color = color;
  
  let h4 = document.createElement("h4");
  
  h4.textContent = json[i]["name"];

  box.onmouseover = () => {
    box.style.borderColor = color;
    h4.style.color = color;
  }
  box.onmouseout = () => {
    box.style.borderColor = "#eee";
    h4.style.color = "#eee";
  }


  box.append(icon, h4);

  skillsBox.append(box);

}


let projects = fetch(`https://mohamed-abdeltwab-portfolio.free.nf/api/showProjects`)
  .then(response => {
    return response.json();
  }).then(json => {

    json.forEach(project => {
      let box = document.createElement("div");

        box.className = "col-md-4 p-0 rounded scroll";

        let image = document.createElement("img");
        image.src = project["image"];
        image.className = "img-fluid rounded";
        let row = document.querySelector(".row-projects");
            
            // Project Title

        let div = document.createElement("div");

        div.className = "d-flex justify-content-between mt-3 px-3";
        let h3 = document.createElement("h3");
        h3.textContent = project["name"];

        let a = document.createElement("a");
        a.href = project["url"];
        a.className = "click-icon";
        let clickIcon = document.createElement("i");
        clickIcon.className = "fa-solid fa-arrow-right-from-bracket text-light";
        a.append(clickIcon);

        div.append(h3, a);

        box.append(image, div);

        box.onmouseover = () => {
          box.style.transform = "translateY(5px)";
          box.style.boxShadow = "0 25px 50px -12px #1c5eec38";
          h3.style.color = "var(--mainColor)";
          clickIcon.style.color = "var(--mainColor) !important";
        }
        box.onmouseleave = () => {
          box.style.boxShadow = "0 0px 50px -12px #eeeeee34";
          box.style.transform = "translateY(0)";
          h3.style.color = "#eee";
          clickIcon.style.color = "#eee";
        }

        let skillsContainer = document.createElement("div");
        skillsContainer.className = "p-3";
        project["skills"].forEach((skill, idx) => {
            let skillSpan = document.createElement("span");
            skillSpan.textContent = skill["name"];
    
            skillSpan.className = "rounded m-1";
            skillSpan.style.backgroundColor = skillsColors[idx % skillsColors.length];
            skillSpan.style.fontSize = "0.8rem";
            skillSpan.style.display = "inline-block";
            skillSpan.style.color = "#eee";
            skillsContainer.append(skillSpan);
        })
        box.append(skillsContainer);
    
        row.append(box);
      })
    })
    // Object.entries(json).forEach((el) => {

    //   [el[1]].forEach(project => {
    //     let box = document.createElement("div");

    //     box.className = "col-md-4 p-0 rounded";

    //     let image = document.createElement("img");
    //     image.src = project["image"];
    //     image.className = "img-fluid rounded";
    //     let row = document.querySelector(".row-projects");
            
    //         // Project Title

    //     let div = document.createElement("div");

    //     div.className = "d-flex justify-content-between mt-3 px-3";
    //     let h3 = document.createElement("h3");
    //     h3.textContent = project["name"];

    //     let a = document.createElement("a");
    //     a.href = project["url"];
    //     a.className = "click-icon";
    //     let clickIcon = document.createElement("i");
    //     clickIcon.className = "fa-solid fa-arrow-right-from-bracket text-light";
    //     a.append(clickIcon);

    //     div.append(h3, a);

    //     box.append(image, div);

    //     box.onmouseover = () => {
    //       box.style.transform = "translateY(5px)";
    //       box.style.boxShadow = "0 25px 50px -12px #1c5eec38";
    //       h3.style.color = "var(--mainColor)";
    //       clickIcon.style.color = "var(--mainColor) !important";
    //     }
    //     box.onmouseleave = () => {
    //       box.style.boxShadow = "0 0px 50px -12px #eeeeee34";
    //       box.style.transform = "translateY(0)";
    //       h3.style.color = "#eee";
    //       clickIcon.style.color = "#eee";
    //     }

    //     let skillsContainer = document.createElement("div");
    //     skillsContainer.className = "p-3";
    //     project["skills"].forEach((skill, idx) => {
    //         let skillSpan = document.createElement("span");
    //         skillSpan.textContent = skill;
    
    //         skillSpan.className = "rounded m-1";
    //         skillSpan.style.backgroundColor = skillsColors[idx % skillsColors.length];
    //         skillSpan.style.fontSize = "0.8rem";
    //         skillSpan.style.display = "inline-block";
    //         skillSpan.style.color = "#eee";
    //         skillsContainer.append(skillSpan);
    //     })
    //     box.append(skillsContainer);
    
    //     row.append(box);
    //   })
    // })





    // //     json.forEach(el => {

    // //     })
    // //   }

    // });

  // })


let emailBtn = document.querySelector(".msg-btn");

emailBtn.addEventListener("click", () => {
  let inputs = document.querySelectorAll(".ipt");

  let formData = new FormData();

  inputs.forEach(input => {
    formData.append(input.name, input.value);
  });

  fetch("https://mohamed-abdeltwab-portfolio.free.nf/api/contact",
    {
      method: 'POST',
      body: formData
    }
  )
    .then(res => {
      return res.json();
    }).then(json => {
      let p = document.querySelector("p.hidden");
      p.textContent = json["message"];
      p.classList.remove("d-none");

      setTimeout(() => {
        p.classList.add("d-none");
      },3000)
  })
  
})




