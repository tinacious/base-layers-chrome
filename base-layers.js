/**
 * Source: https://gist.github.com/tinacious/24eef08e5f5d6ddcd28ac96d54d7790a
 */
(function initBaseLayersGrid() {
  const Grid = {
    id: 'base-layers-chrome__grid-id',

    show: () => {
      const containerWrapperElement = document.createElement('div');
      containerWrapperElement.id = Grid.id;
      containerWrapperElement.style.position = 'fixed';
      containerWrapperElement.style.zIndex = '999';
      containerWrapperElement.style.width = '100vw';
      containerWrapperElement.style.height = '100vh';

      const containerElement = document.createElement('div');
      containerElement.classList.add('container');

      const rowElement = document.createElement('div');
      rowElement.classList.add('row');

      for (var i = 1; i <= 12; i++) {
        const isEven = i % 2 === 0;
        const column = document.createElement('div');
        column.classList.add('col-1');
        column.classList.add('col-md-1');
        column.style.backgroundColor = isEven ? 'darkturquoise' : 'deeppink';
        column.style.textAlign = 'center';
        column.style.opacity = '0.3';
        column.style.height = '100vh';
        column.style.color = '#ffffff';
        column.innerText = i;

        rowElement.appendChild(column);
      }

      containerWrapperElement.appendChild(containerElement);
      containerElement.appendChild(rowElement);
      document.body.prepend(containerWrapperElement);
    },

    hide: (grid) => {
      grid.remove();
    },

    toggle: () => {
      const grid = document.getElementById(Grid.id);
      Grid[grid ? 'hide' : 'show'](grid);
    }
  };

  // Toggle
  Grid.toggle();
})();
