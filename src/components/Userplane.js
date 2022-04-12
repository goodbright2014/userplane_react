import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import './Userplane.css';
import { Box , Card, CardContent , Typography , Grid} from "@material-ui/core";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import YouTube from 'react-youtube';

class CourseList extends Component {


    render() { 
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };

        return (
            <div>
                 <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h6" component="div">
                        Depth
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        2차원에서 Depth 의 표현
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Image courtesy : A Propos of the 'Treatise on Cubic Form' by Juan de Herrera, 1960 – (Salvador Dali)
                        </Typography>
                    </CardContent>

                </Card>




                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/cubic.png"  
                        alt='cubic' 
                        className="dali"
                        />
                </div>



                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h6" component="div">
                        Tessellation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        CAD 형식에서는 종종 곡선과 수학 함수를 사용하여 표면과 솔리드를 정의합니다. 이러한 표면의 정밀도와 부드러움은 제조 공정에 이상적입니다. 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        그러나 최신 GPU 칩은 triangular meshes로 구성된 표면을 렌더링하는 데 고도로 최적화되어 있습니다. 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        초당 수십 개의 놀라운 실사 품질 이미지를 생성하기 위해 이러한 GPU의 한계를 뛰어넘어야 하는 실시간 렌더러는 일반적으로 triangular meshes로 구성된 geometry에서만 작동합니다.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        CAD 파일의 곡면에 근접한 triangular mesh를 자동으로 계산하여 격차를 메우는 프로세스를 Tessellation 이라고 하며 실시간 렌더링에 필수적인 단계입니다.
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Unreal Engine
                        </Typography>
                    </CardContent>

                </Card>

                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                <ReactCompareSlider  style={{ "width":"50%", "margin": "auto" }}
                itemOne={<ReactCompareSliderImage  src="/assets/images/cad-tessellation-example-surface.webp"  alt="Image one" />}
                itemTwo={<ReactCompareSliderImage  src="/assets/images/cad-tessellation-example-wireframe.webp" alt="Image two" />}
                />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h6" component="div">
                        3D Visualization
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        소프트웨어 알고리즘을 사용하여 최적화된 오브젝트에 깊이, texture , 빛의 산란 ,반사등을 더하여 입체적인 2D 이미지를 만들수 있습니다
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Unity
                        </Typography>
                    </CardContent>

                </Card>
             

                <div style={{
                    backgroundColor: 'black'
                  
                }}>
                    <img
                        src="/assets/images/Product_Salt Flat.jpeg"  
                        alt='testA' 
                        className="saltflat"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h6" component="div">
                        Photorealistic (Neural Rendering)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        사물의 깊이에 대응하는 특정 3차원 위치의 모든 공간상 점에 대해서 색상 , 질감을 학습시킬 수 있고 
                        단 몇장의 2차원 사진만으로도 Scene 을 재구성할 수 있습니다   
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        재구성된 Scene 은 Unity 등과 같은 tool을 사용하여 다른 CAD object와 함께 사용하여 image occlusion 등을 개선할 수도 있습니다 
                        </Typography>
                    </CardContent>

                </Card>
                <div >
                    <img
                        src="/assets/images/depth.jpg"  
                        alt='cubic' 
                        className="depth"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Synthetic data
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        이제는 너무도 유명해진 GAN ( generative adversarial network ) 인공지능 모델을 사용하면 상상속의 이미지를
                        사진 혹은 수작업이 없이도 생성해낼 수 있습니다
                        </Typography>
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/synthesis.jpeg"  
                        alt='synthesis' 
                        className="Center"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Digital Twins
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        물리적으로 실제하지 않은 물체를 마치 존재하는 것처럼 감상하고 , 비교하고 , 바라볼 수 있는 가상현실을 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        그러나 많은부분 실제 물리적현실에서 그 속성을 차용한 가상현실을 우리는 Digital Twin이라고 부릅니다
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Hyundai Motor Company,
                        </Typography>
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/Vehicle_design_using_AR.jpeg"  
                        alt='using_AR' 
                        className="usingar"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Digital Twins - Simulation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Digital Twin에서는 실제 주행에서 발생할 수 있는 센서데이터에 대하여 모의실험을 할 수 있습니다.
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Hyundai Motor Company,
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/engineroom_checklist.jpg"  
                        alt='cubic' 
                        className="engineroom"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Graph of Digital Twins
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Digital Twin을 구성하는 각 요소들은 그래프 자료구조로 표현될 수 있습니다 
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Microsoft Azure,
                        </Typography>
                        
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/azure-digital-twins-explorer-demo.png"  
                        alt='cubic' 
                        className="Center"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Machine Learning platform 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Digital Twin 은 Cloud 그리고 Machine Learning platform 과 함께할 때 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        비로소 그 가치가 더욱 빛납니다
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        아래 사진은 kubernetes 에서 작동하는 머신러닝 플랫폼에서의 파이프라인 구축과 예측결과성능 그래프를 보여주고 있습니다
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : kubeflow.org,
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/pipelines-xgboost-graph.png"  
                        alt='cubic' 
                        className="cubic"
                        />
                    <img
                        src="/assets/images/roc.png"  
                        alt='cubic' 
                        className="cubic"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Brisbane’s new ferry terminals - a visual explanation of exactly how the ferry is resilient to rising water
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Digital Twin 데이터로부터의 예측과 이들의 비쥬얼라이제이션을 통해 우리는 직관적으로 위기에 대처하는 구조물을 설계할 수 있습니다
                        </Typography>
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Movie courtesy : Brisbane’s new ferry terminals,
                        </Typography>
                       
                    </CardContent>
                </Card>
                <YouTube className="Center" videoId="UVqDpfruFjc" opts={opts} onReady={this._onReady} />;
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Marvelous Designer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        사진과같은 의상을 3d로 제작하여 사용함으로써 보다 실감나는 동영상을 제작할 수 있습니다  
                        </Typography>
                    
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Movie courtesy : Marvelous Designer,
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                <YouTube className="cubic" videoId="qIcTM8WXFjk" opts={opts} onReady={this._onReady} />;
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        High Performance Computing 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                        Native 환경에서의 시뮬레이션은 다른 환경으로의 이식이나 시뮬레이션 경험의 공유등의 어려움이 존재합니다.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        그림에서는 wasm 기술을 사용하여 Native 작동에 가까운 Performance 를 보여주고 있습니다 
                        </Typography>
                      
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Siemens AG, Germany,
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/wasm.png"  
                        alt='cubic' 
                        className="cubic"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>   
                        <Typography gutterBottom variant="h6" component="div">
                        Connect
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        현실에 존재하지 않는 환경에 대한 정보와 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        시각적 렌더링 ,
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        물리적 환경과 가상환경 그리고 사용자와의 상호작용에
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        라이프로깅을 더함으로써 시뮬레이션 생산성을 극대화합니다
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/connect.jpg"  
                        alt='connect' 
                        className="connect"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>   
                        <Typography gutterBottom variant="h6" component="div">
                        Future plan - Manufacturing Intelligence
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        인스턴스 세그먼테이션을 통한 영역분리, 3차원 깊이정보 및 광학 흐름 등의 풍부한 주석이 있는 쎄미 리얼리스틱한 합성물로부터 디지털트윈 구현을 위한 풍부한 오브젝트를 지원합니다
                        </Typography>
                        
                        <Typography style={{color: 'green'}} variant="body2" color="text.secondary">
                        Picture courtesy : Google Research,
                        </Typography>

                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/kubric.gif"
                        alt='kubric' 
                        className="Center"
                        />
                </div>
   
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>   
                        <Typography gutterBottom variant="h6" component="div">
                        How To Meet ESG Goals 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        제조 지능화는 전 세계적인 경영 화두인 ESG(환경, 사회, 지배구조)의 필수 요소로 간주되고 있습니다. 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        제조 지능화가 구축되면 배터리 생산 전 공정에서 정보통신기술(ICT) 기반의 실시간 모니터링 시스템이 마련되고, 고효율고·품질 제품 양산이 가능해집니다. 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        에너지 효율화, 탄소 중립 및 재생에너지 사용 등 각 기업의 ESG 경영 목표 달성을 위해서는 제조 지능화를 통한 공정 디지털화가 필수적입니다.
                        </Typography>
                        

                    </CardContent>
                </Card>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>   
                      
                       
                        <Typography variant="body2" color="text.secondary">
                        감사합니다
                        </Typography>
                        

                    </CardContent>
                </Card>

                <AppBar position="static">
                    <Toolbar>

                    <Grid container justify="space-between">  
                            <Typography style={{whiteSpace: 'pre-line'}}>
                            55 Seocho-daero 77-gil, Seocho-gu, Seoul <br />
                            jaehyu@userplane.co.kr
                            </Typography>
                            <Typography variant="title" align="right">   
                            Copyright ©2022 userplane, Inc.
                            </Typography>
                            
                        </Grid>
                    </Toolbar>
                </AppBar>
       
    </div>




  
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

}

export default CourseList;
