import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';
import contents from './constants/contents';
import Card from './components/Card';

const buttons = ['First Content', 'Second Content', 'Third Content', 'Fourth Content', 'Fifth Content'];

export default function App() {
  const [active, setActive] = useState(buttons[0]);

  return (
    <div className="grid place-items-center h-screen w-screen">
      <ButtonGroup className="fixed top-32">
        {buttons.map((button) => (
          <Button key={button} active={button === active} onClick={() => setActive(button)}>
            {button}
          </Button>
        ))}
      </ButtonGroup>

      {contents.map(
        (content, index) =>
          active === buttons[index] && <Card key={content.title} title={content.title} text={content.text} />
      )}
    </div>
  );
}
