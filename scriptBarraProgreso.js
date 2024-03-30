        //DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  CapturarInicio = document.querySelector(".CapturarInicio"), 
  CapturarDestino = document.querySelector(".CapturarDestino"),
  buttons = document.querySelectorAll(".step-button");
  


  function mostrarCapturarInicio() {
    CapturarInicio.style.display = 'block';
    CapturarInicio.classList.add('paso-actual');
    } 

    function ocultarCapturarInicio() {
        CapturarInicio.style.display = 'none';
    }


    function mostrarCapturarDestino() {
        CapturarDestino.style.display = 'block';
        CapturarDestino.classList.add('paso-actual'); 
        } 
    
        function ocultarCapturarDestino() {
            CapturarDestino.style.display = 'none';
        }
    

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // update current step based on the button clicked
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  // update progress bar width based on current step
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // check if current step is last step or first step and disable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
  console.log(currentStep);
  if(currentStep==2){
    ocultarCapturarInicio();
    mostrarCapturarDestino();
    document.getElementById("next").disabled = true;
  }



  if(currentStep==1){
    mostrarCapturarInicio();
    ocultarCapturarDestino();
    document.getElementById("next").disabled = false;
  }
};

// add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
  
});