const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const steps = document.querySelectorAll(".stp");
const circles = document.querySelectorAll(".circle");
let currentStep = 0;

// Plan and add-on price data
const planPrices = {
  monthly: {
    "Arcade": "$9/mo",
    "Advanced": "$12/mo",
    "Pro": "$15/mo"
  },
  yearly: {
    "Arcade": "$90/yr",
    "Advanced": "$120/yr",
    "Pro": "$150/yr"
  }
};

const addonPrices = {
  monthly: {
    "Online Service": "+$1/mo",
    "Larger storage": "+$2/mo",
    "Customizable Profile": "+$2/mo"
  },
  yearly: {
    "Online Service": "+$10/yr",
    "Larger storage": "+$20/yr",
    "Customizable Profile": "+$20/yr"
  }
};

// Navigation buttons
nextButtons.forEach(button => {
  button.addEventListener("click", () => {
    // If moving from plan selection page to add-ons page, make sure a plan is selected
    if (currentStep === 1 && !selectedPlan) {
      alert("Please select a plan before continuing");
      return;
    }
    
    // If moving to summary page, update summary information
    if (currentStep === 2 && steps[3].classList.contains("hidden")) {
      updateSummary();
    }
    
    steps[currentStep].classList.remove("shown");
    steps[currentStep].classList.add("hidden");
    circles[currentStep].classList.add("selected-circle");
    currentStep++;
    steps[currentStep].classList.add("shown");
  });
});

// Function to update the summary page with selected options
function updateSummary() {
  // Get summary page elements
  const planName = document.querySelector('.selected-plan .plan-name');
  const planPrice = document.querySelector('.selected-plan .plan-price');
  const addonsContainer = document.querySelector('.addons');
  const totalPrice = document.querySelector('.total b');
  
  // Update plan info
  const billingPeriod = selectedPlan.isYearly ? 'Yearly' : 'Monthly';
  planName.textContent = `${selectedPlan.name} (${billingPeriod})`;
  planPrice.textContent = selectedPlan.price;
  
  // Clear previous addons
  addonsContainer.innerHTML = '';
  
  // Get selected addons
  const selectedAddons = [];
  document.querySelectorAll('.add-ons input:checked').forEach(checkbox => {
    const label = checkbox.closest('label');
    const name = label.querySelector('.text-choise p').textContent;
    const price = label.querySelector('.price').textContent;
    
    selectedAddons.push({ name, price });
    
    // Add addon to summary
    const addonElement = document.createElement('div');
    addonElement.className = 'selected-addon';
    addonElement.innerHTML = `
      <span class="service-name">${name}</span>
      <span class="service-price">${price}</span>
    `;
    addonsContainer.appendChild(addonElement);
  });
  
  // Calculate total price
  let totalAmount = parseInt(selectedPlan.price.match(/\d+/)[0]);
  selectedAddons.forEach(addon => {
    totalAmount += parseInt(addon.price.match(/\d+/)[0]);
  });
  
  // Update total
  totalPrice.textContent = selectedPlan.isYearly ? `+$${totalAmount}/yr` : `+$${totalAmount}/mo`;
}

prevButtons.forEach(button => {
  button.addEventListener("click", () => {
    steps[currentStep].classList.remove("shown");
    steps[currentStep].classList.add("hidden");
    circles[currentStep-1].classList.remove("selected-circle");
    currentStep--;
    steps[currentStep].classList.add("shown");
  });
});

// Billing toggle switcher functionality
const billingToggle = document.querySelector('.switch input[type="checkbox"]');
const monthlyText = document.querySelector('.monthly');
const yearlyText = document.querySelector('.yearly');
const planPriceElements = document.querySelectorAll('.plan-info .plan-price');
const planElements = document.querySelectorAll('.plan');
const addonPriceElements = document.querySelectorAll('.add-ons .price');

// Initialize with yearly text if checkbox is checked
function updatePricesBasedOnBilling() {
  const isYearly = billingToggle.checked;
  const billingType = isYearly ? 'yearly' : 'monthly';
  
  // Update active state for month/year text
  if (isYearly) {
    monthlyText.classList.remove('sw-active');
    yearlyText.classList.add('sw-active');
  } else {
    yearlyText.classList.remove('sw-active');
    monthlyText.classList.add('sw-active');
  }
  
  // Update plan prices
  planElements.forEach(plan => {
    const planName = plan.querySelector('b').textContent;
    const priceElement = plan.querySelector('.plan-price');
    priceElement.textContent = planPrices[billingType][planName];
    
    // Add or remove free months text
    const existingFreeMonths = plan.querySelector('.free-months');
    
    if (isYearly) {
      if (!existingFreeMonths) {
        const freeMonths = document.createElement('span');
        freeMonths.className = 'free-months';
        freeMonths.textContent = '2 months free';
        plan.querySelector('.plan-info').appendChild(freeMonths);
      }
    } else if (existingFreeMonths) {
      existingFreeMonths.remove();
    }
  });
  
  // Update add-on prices
  addonPriceElements.forEach(priceElement => {
    const addonName = priceElement.closest('label').querySelector('p').textContent;
    priceElement.textContent = addonPrices[billingType][addonName];
  });
}

// Listen for changes on the toggle
billingToggle.addEventListener('change', updatePricesBasedOnBilling);

// Plan selection functionality
const plans = document.querySelectorAll('.plan');
let selectedPlan = null;

plans.forEach(plan => {
  plan.addEventListener('click', () => {
    // Remove selected class from all plans
    plans.forEach(p => p.classList.remove('selected'));
    
    // Add selected class to clicked plan
    plan.classList.add('selected');
    
    // Store selected plan info for summary page
    selectedPlan = {
      name: plan.getAttribute('data-plan'),
      price: plan.querySelector('.plan-price').textContent,
      isYearly: billingToggle.checked
    };
  });
});

// Add-on selection functionality
const addonLabels = document.querySelectorAll('.add-ons label');
const addonCheckboxes = document.querySelectorAll('.add-ons input[type="checkbox"]');

addonCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const label = checkbox.closest('label');
    if (checkbox.checked) {
      label.classList.add('selected');
    } else {
      label.classList.remove('selected');
    }
  });
});

// Run initial setup
updatePricesBasedOnBilling();

