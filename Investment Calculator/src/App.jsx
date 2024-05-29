import { useState } from "react"

import ParametersSelection from "./components/ParametersSelection/ParametersSelection"
import Results from "./components/Results/Results";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [parameters, setParameters] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 10,
    duration: 30
  });

  const parametersValid = 
    parameters.initialInvestment > 0 && 
    parameters.annualInvestment > 0 && 
    parameters.expectedReturn > 0 && 
    parameters.duration > 0;

  function handleInputChange(parameterName, value) {
    setParameters(previousParameters => {
      return {
        ...previousParameters,
        [parameterName]: value
      };            
    });
  }

  const investmentResults = calculateInvestmentResults(parameters);

  return (
    <>
      <ParametersSelection parameters={parameters} onParameterChange={handleInputChange} />
      {parametersValid && <Results results={investmentResults} />}
      {!parametersValid && <p className="center">Please input valid parameters.</p>}
    </>
  )
}

export default App
