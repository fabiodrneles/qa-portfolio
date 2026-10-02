import { reports as testReports } from '../../data/portfolio';
import './TestReports.css';

const TestReports = () => {
  return (
    <div className="test-reports">
      <h2>Relatórios de Teste Demonstrativos</h2>
      
      <div className="reports-grid">
        {testReports.map((report, index) => (
          <div key={index} className="report-card">
            <div className="report-header">
              <h3>{report.projectName}</h3>
              <span className={`status ${report.status.toLowerCase()}`}>
                {report.status}
              </span>
            </div>
            
            <div className="report-metrics">
              <div className="metric">
                <span className="metric-value">{report.testCases.total}</span>
                <span className="metric-label">Total de Testes</span>
              </div>
              <div className="metric">
                <span className="metric-value">{report.testCases.passed}</span>
                <span className="metric-label">Passados</span>
              </div>
              <div className="metric">
                <span className="metric-value">{report.testCases.failed}</span>
                <span className="metric-label">Falhas</span>
              </div>
              <div className="metric">
                <span className="metric-value">{report.coverage}%</span>
                <span className="metric-label">Cobertura</span>
              </div>
            </div>

            <div className="report-details">
              <h4>Detalhes do Projeto:</h4>
              <p><strong>Tipo:</strong> {report.projectType}</p>
              <p><strong>Duração:</strong> {report.duration}</p>
              <p><strong>Ambiente:</strong> {report.environment}</p>
              
              <h4>Ferramentas Utilizadas:</h4>
              <div className="tools">
                {report.tools.map((tool, idx) => (
                  <span key={idx} className="tool-tag">{tool}</span>
                ))}
              </div>

              <h4>Principais Defeitos Encontrados:</h4>
              <ul className="defects-list">
                {report.defects.map((defect, idx) => (
                  <li key={idx}>
                    <strong>{defect.severity}:</strong> {defect.description}
                  </li>
                ))}
              </ul>

              <h4>Métricas de Qualidade:</h4>
              <div className="quality-metrics">
                <div className="quality-metric">
                  <span>Defect Detection Percentage</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${report.qualityMetrics.ddp}%`}}
                    ></div>
                  </div>
                  <span>{report.qualityMetrics.ddp}%</span>
                </div>
                <div className="quality-metric">
                  <span>Test Case Effectiveness</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${report.qualityMetrics.tce}%`}}
                    ></div>
                  </div>
                  <span>{report.qualityMetrics.tce}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestReports;