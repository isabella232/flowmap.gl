import { experimental, ScatterplotLayer, Shaders } from 'deck.gl';
import VertexShader from './FlowCirclesLayerVertex.glsl';
import VertexShader64 from './FlowCirclesLayerVertex64.glsl';

// tslint:disable-next-line:no-any
export type FlowCirclesData = any;

const { enable64bitSupport } = experimental;

class FlowCirclesLayer extends ScatterplotLayer<FlowCirclesData> {
  static layerName: string = 'FlowCirclesLayer';

  getShaders(): Shaders {
    const shaders = super.getShaders();
    return {
      ...shaders,
      vs: enable64bitSupport(this.props) ? VertexShader64 : VertexShader,
    };
  }
}

export default FlowCirclesLayer;
