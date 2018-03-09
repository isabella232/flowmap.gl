/*
 * Copyright 2018 Teralytics
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

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
