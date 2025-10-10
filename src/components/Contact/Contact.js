import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio - em um projeto real, integraria com um backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'qa.engineer@example.com',
      link: 'mailto:qa.engineer@example.com'
    },
    {
      icon: '📱',
      title: 'Telefone',
      value: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/qa-engineer',
      link: 'https://linkedin.com/in/qa-engineer'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/qa-engineer',
      link: 'https://github.com/qa-engineer'
    }
  ];

  const skills = [
    { name: 'Testes Automatizados', level: 95 },
    { name: 'Testes de API', level: 90 },
    { name: 'Testes de Performance', level: 85 },
    { name: 'Testes de Segurança', level: 80 },
    { name: 'CI/CD', level: 88 },
    { name: 'BDD', level: 92 }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <p>Estou disponível para oportunidades como QA Engineer Sênior. Vamos conversar!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-section">
              <h3>Habilidades Principais</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="availability">
              <h3>Disponibilidade</h3>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Disponível para novas oportunidades</span>
              </div>
              <div className="availability-details">
                <p><strong>Preferências:</strong></p>
                <ul>
                  <li>Remoto ou Híbrido (São Paulo)</li>
                  <li>CLT ou PJ</li>
                  <li>Projetos desafiadores em qualidade</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envie uma Mensagem</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="opportunity">Oportunidade de Trabalho</option>
                    <option value="project">Projeto Freelance</option>
                    <option value="consulting">Consultoria</option>
                    <option value="partnership">Parceria</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua oportunidade ou projeto..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;