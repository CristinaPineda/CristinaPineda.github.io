import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useHistory } from 'react-router';

export default function ButtonProjects() {
  const styles = useGradientBtnStyles();
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });

  const goProjects = useHistory();
  const handleClick = () => {
    goProjects.push('/projects');
  }

  return (
    <div className={ gutterStyles.parent }>
      <div>
        <Button
          classes={ styles }
          onClick={ handleClick }
        >
          PROJETOS
        </Button>
      </div>
      <div>
        <Button
          classes={ styles }
        >
          CONTATO
        </Button>
      </div>
    </div>
  );
};
