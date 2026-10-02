import React, { useState } from 'react';
import TestReports from '../../components/TestReports/TestReports';
import TestScenarios from '../../components/TestScenarios/TestScenarios';
import Metrics from '../../components/Metrics/Metrics';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('reports');

  return (
    <div className="portfolio">
      <div className="container">
        <h1>Portfólio de Projetos</h1>
        
        <div className="tabs">
          <button 
            className={activeTab === 'reports' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('reports')}
          >
            Relatórios de Teste
          </button>
          <button 
            className={activeTab === 'scenarios' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('scenarios')}
          >
            Cenários de Teste
          </button>
          <button 
            className={activeTab === 'metrics' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('metrics')}
          >
            Métricas e KPIs
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'reports' && <TestReports />}
          {activeTab === 'scenarios' && <TestScenarios />}
          {activeTab === 'metrics' && <Metrics />}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;