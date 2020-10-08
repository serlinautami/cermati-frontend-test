import  React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import HighlightItem from '../HighlightItem';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faPaintBrush, faCubes, faBullhorn, faBars, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

// component
const HighlightPanel = () => {

  const data = [
    {
      title: 'Consult',
      body: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
      icon: faComments
    },
    {
      title: 'Design',
      body: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
      icon: faPaintBrush
    },
    {
      title: 'Develop',
      body: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
      icon: faCubes
    },
    {
      title: 'Marketing',
      body: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
      icon: faBullhorn
    },
    {
      title: 'Manage',
      body: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
      icon: faBars
    },
    {
      title: 'Evolve',
      body: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.',
      icon: faChartLine
    },
  ]

  return (
    <div className="highlight-panel">
      <Container>
        <SectionHeader 
          title="How Can I Help You?"
          className="highlight-panel-section-header"
          description={
            <React.Fragment>
              Our work then targeted, best practices outcomes social innovation synergy.<br />
              Venture philanthropy, revolutionary inclusive policymaker relief. User-centered<br />
              program areas scale.
            </React.Fragment>
          }
        />
  
        <div className="highlight-panel-row">
          {data.map((value, index) => {
            return (
              <div key={index} className="highlight-panel-col">
                <HighlightItem
                  title={value.title}
                  body={value.body}
                  icon={value.icon}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default HighlightPanel;