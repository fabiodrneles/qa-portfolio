import React from 'react';
import { qualityMetrics } from '../../data/testData';
import './Metrics.css';

const Metrics = () => {
  return (
    <div className="metrics">
      <h2>Métricas de Qualidade e KPIs</h2>
      
      <div className="metrics-overview">
        <div className="overview-card">
          <h3>Visão Geral da Qualidade</h3>
          <div className="overview-grid">
            <div className="overview-item">
              <span className="overview-value">{qualityMetrics.overall.ddp}%</span>
              <span className="overview-label">Defect Detection Percentage</span>
            </div>
            <div className="overview-item">
              <span className="overview-value">{qualityMetrics.overall.testEfficiency}%</span>
              <span className="overview-label">Eficiência de Testes</span>
            </div>
            <div className="overview-item">
              <span className="overview-value">{qualityMetrics.overall.defectDensity}</span>
              <span className="overview-label">Densidade de Defeitos</span>
            </div>
            <div className="overview-item">
              <span className="overview-value">{qualityMetrics.overall.defectLeakage}%</span>
              <span className="overview-label">Defect Leakage</span>
            </div>
          </div>
        </div>
      </div>

      <div className="metrics-details">
        <div className="metrics-section">
          <h3>Métricas de Teste por Tipo</h3>
          <div className="metrics-grid">
            {qualityMetrics.byType.map((metric, index) => (
              <div key={index} className="metric-card">
                <h4>{metric.type}</h4>
                <div className="metric-stats">
                  <div className="stat">
                    <span className="stat-value">{metric.coverage}%</span>
                    <span className="stat-label">Cobertura</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{metric.passRate}%</span>
                    <span className="stat-label">Taxa de Sucesso</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{metric.defectsFound}</span>
                    <span className="stat-label">Defeitos Encontrados</span>
                  </div>
                </div>
                <div className="metric-trend">
                  <span>Tendência: </span>
                  <span className={`trend ${metric.trend}`}>
                    {metric.trend === 'improving' ? '📈 Melhorando' : 
                     metric.trend === 'stable' ? '➡️ Estável' : '📉 Piorando'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="metrics-section">
          <h3>Evolução de Defeitos ao Longo do Tempo</h3>
          <div className="defect-evolution">
            <div className="evolution-chart">
              {qualityMetrics.defectEvolution.map((month, index) => (
                <div key={index} className="month-data">
                  <div className="month-bar">
                    <div 
                      className="bar critical" 
                      style={{height: `${month.defects.critical * 5}px`}}
                      title={`Críticos: ${month.defects.critical}`}
                    ></div>
                    <div 
                      className="bar high" 
                      style={{height: `${month.defects.high * 5}px`}}
                      title={`Altos: ${month.defects.high}`}
                    ></div>
                    <div 
                      className="bar medium" 
                      style={{height: `${month.defects.medium * 5}px`}}
                      title={`Médios: ${month.defects.medium}`}
                    ></div>
                    <div 
                      className="bar low" 
                      style={{height: `${month.defects.low * 5}px`}}
                      title={`Baixos: ${month.defects.low}`}
                    ></div>
                  </div>
                  <span className="month-label">{month.month}</span>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color critical"></div>
                <span>Crítico</span>
              </div>
              <div className="legend-item">
                <div className="legend-color high"></div>
                <span>Alto</span>
              </div>
              <div className="legend-item">
                <div className="legend-color medium"></div>
                <span>Médio</span>
              </div>
              <div className="legend-item">
                <div className="legend-color low"></div>
                <span>Baixo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metrics-section">
          <h3>Análise de Root Cause</h3>
          <div className="root-cause-analysis">
            {qualityMetrics.rootCauseAnalysis.map((cause, index) => (
              <div key={index} className="cause-item">
                <div className="cause-header">
                  <span className="cause-type">{cause.type}</span>
                  <span className="cause-percentage">{cause.percentage}%</span>
                </div>
                <div className="cause-bar">
                  <div 
                    className="cause-progress" 
                    style={{width: `${cause.percentage}%`}}
                  ></div>
                </div>
                <div className="cause-examples">
                  <strong>Exemplos:</strong> {cause.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;