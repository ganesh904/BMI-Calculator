import { useState } from "react";

function App() {
  const [heightValue, setHeightValue] = useState();
  const [weightValue, setWeightValue] = useState();
  const [bmiValue, setBMIValue] = useState();
  const [result, setResult] = useState();

  // BMI = Weight(kg)/(Height(m))^2

  const calculateBMI = () => {
    if (heightValue && weightValue) {
      const heightValueInM = heightValue / 100;
      const bmi = (weightValue / (heightValueInM * heightValueInM)).toFixed(2);
      setBMIValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setResult(message);
    } else {
      setBmiValue("");
      setResult("");
    }
  };

  return (
    <div class="w-50% m-auto w-full max-w-sm p-4 bg-white border border-black-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Calculate Your BMI
        </h5>
        <div>
          <label
            for="height"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Your Height(cm)
          </label>
          <input
            type="number"
            value={heightValue}
            name="height"
            id="height"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setHeightValue(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            for="number"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Your Weight(kg)
          </label>
          <input
            type="number"
            value={weightValue}
            name="number"
            id="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            onChange={(e) => setWeightValue(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={calculateBMI}
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate Your BMI
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          <label
            for="height"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your BMI: {bmiValue}
          </label>
          <label
            for="height"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Result: {result}
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
