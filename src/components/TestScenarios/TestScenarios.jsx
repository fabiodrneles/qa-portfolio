import React, { useState } from 'react';
import { testScenarios } from '../../data/testData';
import './TestScenarios.css';

const TestScenarios = () => {
  const [selectedType, setSelectedType] = useState('all');

  const filteredScenarios = selectedType === 'all' 
    ? testScenarios 
    : testScenarios.filter(scenario => scenario.type === selectedType);

  return (
    <div className="test-scenarios">
      <h2>Cenários de Teste Demonstrativos</h2>
      
      <div className="filters">
        <button 
          className={selectedType === 'all' ? 'filter active' : 'filter'}
          onClick={() => setSelectedType('all')}
        >
          Todos
        </button>
        <button 
          className={selectedType === 'functional' ? 'filter active' : 'filter'}
          onClick={() => setSelectedType('functional')}
        >
          Funcionais
        </button>
        <button 
          className={selectedType === 'api' ? 'filter active' : 'filter'}
          onClick={() => setSelectedType('api')}
        >
          API
        </button>
        <button 
          className={selectedType === 'performance' ? 'filter active' : 'filter'}
          onClick={() => setSelectedType('performance')}
        >
          Performance
        </button>
        <button 
          className={selectedType === 'security' ? 'filter active' : 'filter'}
          onClick={() => setSelectedType('security')}
        >
          Segurança
        </button>
      </div>

      <div className="scenarios-list">
        {filteredScenarios.map((scenario, index) => (
          <div key={index} className="scenario-card">
            <div className="scenario-header">
              <h3>{scenario.title}</h3>
              <span className={`scenario-type ${scenario.type}`}>
                {scenario.type}
              </span>
            </div>
            
            <div className="scenario-description">
              <p><strong>Objetivo:</strong> {scenario.objective}</p>
              <p><strong>Pré-condições:</strong> {scenario.preconditions}</p>
            </div>

            <div className="test-steps">
              <h4>Steps de Teste:</h4>
              <table>
                <thead>
                  <tr>
                    <th>Step</th>
                    <th>Ação</th>
                    <th>Resultado Esperado</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {scenario.steps.map((step, stepIndex) => (
                    <tr key={stepIndex}>
                      <td>{step.step}</td>
                      <td>{step.action}</td>
                      <td>{step.expectedResult}</td>
                      <td>
                        <span className={`step-status ${step.status}`}>
                          {step.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="scenario-footer">
              <div className="scenario-meta">
                <span><strong>Prioridade:</strong> {scenario.priority}</span>
                <span><strong>Complexidade:</strong> {scenario.complexity}</span>
                <span><strong>Automatizado:</strong> {scenario.automated ? 'Sim' : 'Não'}</span>
              </div>
              
              {scenario.automationCode && (
                <div className="automation-code">
                  <h4>Código de Automação:</h4>
                  <pre><code>{scenario.automationCode}</code></pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestScenarios;