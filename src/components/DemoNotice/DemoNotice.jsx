import './DemoNotice.css';

// 003 FR-3: tells visitors the distributed content is fictitious.
const DemoNotice = ({ show }) => {
  if (!show) return null;
  return (
    <p className="demo-notice" role="note">
      Dados fictícios de demonstração. Para usar o modelo, troque o conteúdo de{' '}
      <code>src/data/portfolio.json</code>.
    </p>
  );
};

export default DemoNotice;
