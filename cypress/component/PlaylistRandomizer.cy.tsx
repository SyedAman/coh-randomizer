// get the PlaylistRandomizer component
import { RandomizerButton, ResultsDisplay, PlaylistRandomizerContainer } from '../../src/components/PlaylistRandomizer';

describe('RandomizerButton', () => {
  it('mounts', () => {
    cy.mount(<RandomizerButton />);
  });

  it('renders a button', () => {
    cy.mount(<RandomizerButton />);
    cy.get('button').should('exist');
  });

  it('renders a button with the text "Randomize"', () => {
    cy.mount(<RandomizerButton />);
    cy.get('button').should('have.text', 'Randomize');
  });

  it('calls the getRandomPlaylist function when the button is clicked', () => {
    const getRandomPlaylist = cy.stub();
    cy.mount(<RandomizerButton getRandomPlaylist={getRandomPlaylist} />);
    cy.get('button').click();
    cy.wrap(getRandomPlaylist).should('have.been.called');
  });
});

describe('ResultsDisplay', () => {
  it('mounts', () => {
    cy.mount(<ResultsDisplay />);
  });

  it('renders a p', () => {
    cy.mount(<ResultsDisplay />);
    cy.get('p').should('exist');
  });

  it('renders a p with the text "Results"', () => {
    cy.mount(<ResultsDisplay />);
    cy.get('p').should('have.text', 'Results');
  });

  it('renders a p with the text "Results" when the results prop is passed', () => {
    cy.mount(<ResultsDisplay results={{faction: "USF", gamemode: "2v2"}} />);
    cy.get('p').should('have.text', `Results | Faction: USF | Gamemode: 2v2`);
  });
});

describe('PlaylistRandomizerContainer', () => {
  it('mounts', () => {
    cy.mount(<PlaylistRandomizerContainer />);
  });

  it('renders a RandomizerButton', () => {
    cy.mount(<PlaylistRandomizerContainer />);
    cy.get('button').should('exist');
  });

  it('renders a ResultsDisplay', () => {
    cy.mount(<PlaylistRandomizerContainer />);
    cy.get('p').should('exist');
  });

  it('shows the results when the RandomizerButton is clicked', () => {
    cy.mount(<PlaylistRandomizerContainer />);
    cy.get('button').click();
    cy.get('p').should('have.text', `Results | Faction: USF | Gamemode: 2v2`);
  });
});
