import Input from "../Input/Input";

export default function ParametersSelection({ parameters, onParameterChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <Input 
                    title="Initial investment" 
                    type="number" 
                    value={parameters['initialInvestment']} 
                    onChange={(value) => onParameterChange('initialInvestment', value)}
                />
                <Input 
                    title="Annual investment" 
                    type="number" 
                    value={parameters['annualInvestment']} 
                    onChange={(value) => onParameterChange('annualInvestment', value)}
                />
            </div>
            <div className="input-group">
                <Input 
                    title="Expected return" 
                    type="number" 
                    value={parameters['expectedReturn']} 
                    onChange={(value) => onParameterChange('expectedReturn', value)}
                />
                <Input 
                    title="Duration" 
                    type="number" 
                    value={parameters['duration']} 
                    onChange={(value) => onParameterChange('duration', value)}
                />
            </div>
        </section>
    );
}