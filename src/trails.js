/** @format */

import {createOlObject} from 'ol-wrapper';

const MAP_DEFAULTS = {
  controls: [
    {
      olClass: 'control.Attribution',
    },
    {
      olClass: 'control.ScaleLine',
    },
    {
      olClass: 'control.Zoom',
    },
    {
      olClass: 'control.ZoomSlider',
    },
  ],
  loadTilesWhileAnimating: true,
  loadTilesWhileInteracting: true,
};
const LAYER_DEFAULTS = {
  preload: 7,
  // For VectorLayer
  updateWhileAnimating: true,
  updateWhileInteracting: true,
};
const VIEW_DEFAULTS = {
  olClass: 'View',
  maxZoom: 15,
  zoom: 5,
};
const SOURCE_DEFAULTS = {
  maxZoom: 15,
};

async function getTrailData() {
  const trails = await fetch('/assets/trails_data/data.json');
  return trails.json();
}

async function getTrailConfig(trailName) {
  const trails = await getTrailData();
  const {
    trails: {[trailName]: trail},
    layers,
  } = trails;
  trail.layers = trail.layers.map(l => {
    const layer = Object.assign({}, layers[l], LAYER_DEFAULTS);
    layer.source = Object.assign({}, layer.source, SOURCE_DEFAULTS);
    return layer;
  });
  const pathClass = trail.path
    .split('.')
    .pop()
    .toUpperCase();
  const format = `format.${pathClass}`;
  const pathLayer = {
    olClass: 'layer.Vector',
    type: 'overlay',
    source: Object.assign(
      {
        olClass: 'source.Vector',
        url: trail.path,
        format: {
          olClass: format,
        },
      },
      SOURCE_DEFAULTS,
    ),
  };
  if (pathClass === 'GPX') {
    pathLayer.style = {
      olClass: 'style.Style',
      stroke: {
        olClass: 'style.Stroke',
        color: 'red',
        width: 1,
      },
    };
  }

  trail.layers.push(pathLayer);
  trail.view = Object.assign({}, trail.view, VIEW_DEFAULTS);
  return Object.assign({}, trail, MAP_DEFAULTS);
}

async function loadMapAsync(trailName, targetId) {
  try {
    const config = await getTrailConfig(trailName);
    config.target = targetId;
    const map = createOlObject(config);
    const view = map.getView();
    view.fit(config.fit, map.getSize());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed loading map', e);
  }
}

export function loadMap(trailName, targetId) {
  document.addEventListener('DOMContentLoaded', () =>
    loadMapAsync(trailName, targetId),
  );
}
